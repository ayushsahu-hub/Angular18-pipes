import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType:'cel'|'fah',outputType?:'cel'|'fah'): string | null {
    let val;
    if (!value) {
      return null;
    }
    if (typeof(value) === 'string') {
      val = parseFloat(value);    
    } else {
      val = value;
    }
    let outputTemp:number;
    if (inputType==='cel' && outputType==='fah') {
      outputTemp = val * (9/5) + 32;      
    } else if (inputType==='fah' && outputType==='cel'){
      outputTemp = (val - 32) * (5/9); 
    } else {
      outputTemp = val
    }
    let symbol:'F' | 'C';
    if (!outputType) {
      symbol = inputType === 'cel' ? 'C' :'F';
    } else {
      symbol = outputType === 'cel' ? 'C' :'F';
    }
    return outputTemp.toFixed(2) + symbol;
  }

}
