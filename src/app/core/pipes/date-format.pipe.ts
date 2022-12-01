import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string) {
    const datePipe = new DatePipe('en-US');
    const val = datePipe.transform(value, 'dd/MM/yyyy');
    return val;
  }
}
