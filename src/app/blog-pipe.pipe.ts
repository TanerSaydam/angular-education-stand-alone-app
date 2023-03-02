import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogPipe',
  standalone: true
})
export class BlogPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
