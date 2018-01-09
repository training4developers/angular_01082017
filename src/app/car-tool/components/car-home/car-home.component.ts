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

  constructor() { }

  ngOnInit() {
  }

  public addCar() {

    this.carFormData.id = Math.max(...this.cars.map(c => c.id)) + 1;
    this.cars = this.cars.concat(this.carFormData);
    this.carFormData = {} as Car;

  }

}
