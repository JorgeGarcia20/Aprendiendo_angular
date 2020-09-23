import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  transform(value_1: any, value_2: any) {
    let operacion = `
      suma: ${value_1 + value_2} - 
      resta: ${value_1 - value_2} - 
      multiplicacion: ${value_1 * value_2} - 
      divicion: ${value_1 / value_2} - 
    `;
    return operacion;

  }
}
