import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  nombre : string;
  foto : string;
  descripcion : string; 
  likes : number;
  cocinero : string;
  fotoGluten: string;
  isGlutenFree:boolean;
  ingredientes:string[];
  numIngredientes:number;
  show:boolean;
  constructor() {
    console.log('RecetaComponent constructor');
    this.nombre='Bocata de calamares';
    this.foto='https://www.hogarmania.com/archivos/201411/bocadillo-calamares-xl-668x400x80xX.jpg';
    this.descripcion='soy un bocata de calamares';
    this.likes=12; 
    this.isGlutenFree=true;
    this.cocinero="Carlos Arguiñano";
    this.ingredientes=["Calamares","Limon","Pan","Salsa Ali Oli"]
    this.numIngredientes=this.ingredientes.length;
    this.show=false;
   }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }
  sumarLike(){
    this.likes++;
  }
  cambiarShow(){
    this.show=!this.show;
  }
}
