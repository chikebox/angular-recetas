import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks-coches';

@Injectable()
export class CochesService {
  coches:Array<Coche>
  constructor() {
    this.coches=new Array<Coche>();
    console.log('CochesService Constructor')
   }
   /*
   Conseguir todos los coches del concesionario
   */
  getAll():Array<Coche>{
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

        this.coches.push(coche);

    });

    return this.coches;
  }
  crear(coche:Coche):void{
    this.coches.unshift(coche);
   }
}