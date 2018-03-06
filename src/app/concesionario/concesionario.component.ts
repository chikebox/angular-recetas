import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';
import { CochesService } from '../providers/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {
  stock: Array<Coche>;
  coche1:Coche;
  coche2:Coche;


  //Inicializar los atributos
  constructor( public cochesService:CochesService ) { 
    console.log('ConcesionarioComponent constructor');
    this.stock= new Array<Coche>();
    this.coche1=new Coche('','','','',0,0,0);
    this.coche2=new Coche('','','','',0,0,0);
    /* estos datos nos los provee el Service
    this.stock.push( new Coche('Seat','Panda',4,160,4.5));
    this.stock.push( new Coche('Toyota','Verso',4,250,8.9));
    this.stock.push( new Coche('Opel','Corsa',2,300,18,'V1.6'));
    this.stock.push( new Coche('Citroen','Saxo',2,60,0.8));
    */
  }
  //LLamar a los servicios.
  ngOnInit() {
    this.stock=this.cochesService.getAll();
    console.log('ConcesionarioComponent ngOnInit');
  }
  recibirCoche(event){
    console.log("ConcesionarioComponent recibirCoche %o", event.coche);
    this.coche2=this.coche1;
    this.coche1=event.coche;
    console.log("Coche1 %o",this.coche1);  
    console.log("Coche2 %o",this.coche2);
  }
}
