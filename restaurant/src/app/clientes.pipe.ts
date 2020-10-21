import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientes'
})
export class ClientesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
