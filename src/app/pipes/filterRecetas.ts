import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({
  name: 'filter'
})
export class FilterReceta implements PipeTransform {
  /**
   * 
   * @param items :Coche[]
   * @param searchText :  string con la marca o modelo del coche 
   */
  transform(items: Array<Receta>, searchText: string): Array<Receta> {

    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    let nombreReceta="";
    return items.filter( recetaIt => {
        nombreReceta=recetaIt.nombre;
        nombreReceta = nombreReceta.toLowerCase();
        return nombreReceta.includes(searchText);
    });
   }

}