import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, vista: boolean): string {
    return (vista) ? '*'.repeat(value.length) : value;
  }
}
