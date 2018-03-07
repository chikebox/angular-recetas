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
  transform(items: Array<Receta>, searchText: string="", isGlutenFree:Boolean): Array<Receta> {

    if(!items) return [];
    searchText = searchText.toLowerCase();
    let nombreReceta="";
    let glutenReceta=false;
    if (isGlutenFree){
      items= items.filter( recetaIt => {
          glutenReceta=recetaIt.isGlutenFree;
      
          return isGlutenFree===glutenReceta;
          });

    }
    items= items.filter( recetaIt => {
      nombreReceta=recetaIt.nombre +" "+recetaIt.cocinero;
      recetaIt.ingredientes.forEach(ingrediente => {
        nombreReceta=nombreReceta+" "+ingrediente;
      });
    nombreReceta = nombreReceta.toLowerCase();
    return nombreReceta.includes(searchText);
    });
    return items;
   }
    

}