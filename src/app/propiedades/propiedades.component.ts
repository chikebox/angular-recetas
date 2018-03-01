import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {
  ocultar:boolean;
  color: string;
  enlace: string;
  constructor() {
    console.log("Constructor");
    this.ocultar=true;
    this.color="green";
    this.enlace="https://angular.io/api";
   }


  ngOnInit() {
    console.log("Init");
  }
   

}
