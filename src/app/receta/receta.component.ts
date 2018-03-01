import { Component, OnInit } from '@angular/core';
import { Receta } from "../model/receta"
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  receta:Receta;
  numIngredientes:number;
  likes:number;
  show:boolean;
  constructor() {
    console.log('RecetaComponent constructor');
    this.receta= new Receta('Bocata de calamares',
    '/assets/imgs/receta_default.jpg',
    'soy un bocata de calamares',
    12,
    "Carlos Arguiñano",
    true,
    ["Calamares","Limon","Pan","Salsa Ali Oli"]);
    this.numIngredientes=this.receta.ingredientes.length;
    this.likes=this.receta.likes;
    this.show=false;
   }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }
  sumarLike(){
    this.receta.likes++;
  }
  cambiarShow(){
    this.show=!this.show;
  }
}
