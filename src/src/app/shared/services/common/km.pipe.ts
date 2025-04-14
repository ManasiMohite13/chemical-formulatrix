import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'km',
})
export class KmPipe implements PipeTransform {
  transform(value: string, key: any): string {
    if (typeof key === 'string') {
      return value;
    } else if (key === null || key === '') {
      return (value = 0 + ' ' + 'KM');
    } else {
      return value + ' ' + 'KM';
    }
  }
}
