import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCKS_RECETAS } from './mocks-recetas';

@Injectable()
export class RecetasService {

  constructor() {
    console.log('CochesService Constructor')
   }
   /*
   Conseguir todas las Recetas del Menu
   */
  getAll():Array<Receta>{
    let recetas:Array<Receta>=new Array<Receta>();
    let jsonData = JSON.parse(MOCKS_RECETAS.menu);

    jsonData.forEach( element => {
      
        let receta = new Receta( 
                          element.id, 
                          element.nombre, 
                          element.foto,
                          element.descripcion,
                          element.likes,
                          element.cocinero,
                          element.isGlutenFree,
                          element.ingredientes
                          );

        recetas.push(receta);

    });

    return recetas;
  }

}
