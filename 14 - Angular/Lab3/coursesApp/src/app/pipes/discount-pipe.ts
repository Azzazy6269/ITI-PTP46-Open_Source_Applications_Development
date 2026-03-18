import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, percent: number=10): number {
    value = value - (value*percent/100)
    return value;
  }
}
