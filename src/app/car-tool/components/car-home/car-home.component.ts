import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  public cars: Car[] = [
    { id: 1, make: 'Ford', model: 'F-150', year: 2017, color: 'red', price: 50000 },
    { id: 2, make: 'Chevrolet', model: 'Silverado', year: 2015, color: 'blue', price: 45000 },
  ];

  public carFormData: Car = {} as Car;

  public filterField = '';
  public filterValue = '';
  public filterOptions = [
    { label: 'Make', value: 'make' },
    { label: 'Model', value: 'model' },
    { label: 'Year', value: 'year' },
    { label: 'Color', value: 'color' },
    { label: 'Price', value: 'price' },
  ];
  public filteredCarsCache = {};
  public lastFilteredCars: Car[] = [];

  public sortField = '';
  public sortOptions = [
    { label: 'Make', value: 'make' },
    { label: 'Model', value: 'model' },
    { label: 'Year', value: 'year' },
    { label: 'Color', value: 'color' },
    { label: 'Price', value: 'price' },
  ];
  public sortedCarsCache = {};
  public lastSortedCars: Car[] = [];

  constructor() { }

  ngOnInit() {
  }

  public addCar() {

    this.carFormData.id = Math.max(...this.cars.map(c => c.id)) + 1;
    this.cars = this.cars.concat(this.carFormData);
    this.carFormData = {} as Car;

  }


  // computed property/value
  public get filteredCars() {

    const getCacheKey = () => this.filterField + ':' + this.filterValue;

    if (this.lastFilteredCars !== this.cars) {
      this.filteredCarsCache = {};
      this.lastFilteredCars = this.cars;
    }

    if (!this.filteredCarsCache[getCacheKey()]) {
      console.log('filtering, key: ' + getCacheKey());
      if (this.filterField === '' || this.filterValue === '') {
        this.filteredCarsCache[getCacheKey()] = this.cars.concat();
      } else {
        this.filteredCarsCache[getCacheKey()] = this.cars.filter(car =>
          car[this.filterField].startsWith(this.filterValue)
        );
      }
    } else {
      console.log('retrieving from filter cache, key: ' + getCacheKey());
    }

    return this.filteredCarsCache[getCacheKey()];
  }

  // computed property/value
  public get sortedCars() {

    if (this.lastSortedCars !== this.filteredCars) {
      this.sortedCarsCache = {};
      this.lastSortedCars = this.filteredCars;
    }

    if (!this.sortedCarsCache[this.sortField]) {
      console.log('sorting, key: ' + this.sortField);
      this.sortedCarsCache[this.sortField] = this.filteredCars.slice(0).sort(
        (carA: Car, carB: Car) => {
          if (carA[this.sortField] < carB[this.sortField]) {
            return -1;
          }
          if (carA[this.sortField] > carB[this.sortField]) {
            return 1;
          }
          return 0;
        }
      );
    } else {
      console.log('retrieving from sort cache, key: ' + this.sortField);
    }

    return this.sortedCarsCache[this.sortField];
  }

}
