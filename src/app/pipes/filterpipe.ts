import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * 
   * @param items :Coche[]
   * @param searchText :  string con la marca o modelo del coche 
   */
  transform(items: Array<Coche>, searchText: string): Array<Coche> {

    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    let marcaModelo="";
    return items.filter( cocheIt => {
        marcaModelo=cocheIt.marca +" "+cocheIt.modelo;
        marcaModelo = marcaModelo.toLowerCase();
        return marcaModelo.includes(searchText);
    });
   }

}