import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  transform(str: string, start: number, end: number) {
    let output = str;

    if (str.length > end) {
      output = str.substring(start, end) + '...';
    }

    return output;
  }
}
