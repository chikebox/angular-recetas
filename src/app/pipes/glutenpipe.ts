import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({
  name: 'filterGluten'
})
export class FilterGluten implements PipeTransform {
  /**
   * 
   * @param items :Coche[]
   * @param searchText :  string con la marca o modelo del coche 
   */
  transform(items: Array<Receta>, isGlutenFree: boolean): Array<Receta> {

    if(!items) return [];
    let glutenReceta=false;
    if (isGlutenFree){
        return items.filter( recetaIt => {
            glutenReceta=recetaIt.isGlutenFree;
        
            return isGlutenFree===glutenReceta;
            });
    }
    else{
        return items;
    }
}

}