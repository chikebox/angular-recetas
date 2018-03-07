import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCKS_RECETAS } from './mocks-recetas';

@Injectable()
export class RecetasService {
  recetas:Array<Receta>=new Array<Receta>();
  constructor() {
    console.log('CochesService Constructor')
   }
   /*
   Conseguir todas las Recetas del Menu
   */
  getAll():Array<Receta>{
    
    let jsonData = JSON.parse(MOCKS_RECETAS.menu);

    jsonData.forEach( element => {
      
        let receta = new Receta(  
                          element.nombre, 
                          element.foto,
                          element.descripcion,
                          element.likes,
                          element.cocinero,
                          element.isGlutenFree,
                          element.ingredientes
                          );

        this.recetas.push(receta);

    });

    return this.recetas;
  }
  /**
   * Crear Nueva Receta
   * @param receta :Receta nueva
   */
 crear(receta:Receta):void{
  this.recetas.unshift(receta);
 }
}
