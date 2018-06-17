import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + '_' + args;
  }

  parse(value: string, args?: any) {
   return value + '_' + args;
  }
}
