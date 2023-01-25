import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioMoneda'
})
export class CambioMonedaPipe implements PipeTransform {

  transform(moneda: number,tipoCambio:string) {
    if (tipoCambio =="1") {
      return moneda *3.86;
    }else{
      return moneda *4.19;
    }
  }

}
