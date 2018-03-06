import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks-coches';

@Injectable()
export class CochesService {

  constructor() {
    console.log('CochesService Constructor')
   }
   /*
   Conseguir todos los coches del concesionario
   */
  getAll():Array<Coche>{
    let coches:Array<Coche>=new Array<Coche>();
    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {
      
        let coche = new Coche( 
                          element.marca, 
                          element.modelo, 
                          
                          
                          element.version,
                          element.foto,
                          element.puertas,
                          element.caballos,
                          element.consumo
                          );

        coches.push(coche);

    });

    return coches;
  }

}