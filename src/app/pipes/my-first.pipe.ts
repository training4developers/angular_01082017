import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst'
})
export class MyFirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return String(value).toUpperCase();
  }

}
