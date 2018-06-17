import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEditField'
})
export class MaskEditFieldPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
