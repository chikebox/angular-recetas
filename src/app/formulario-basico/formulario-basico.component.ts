import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent implements OnInit {
  //atributo formGroup para usar en el HTML => [formGroup]="formulario"
  formulario:FormGroup;
  banana:string;
  constructor(public fb:FormBuilder) {
    //crear formulario
    this.formulario= this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(2)]]
    });
    this.banana="Banana";
   }

  ngOnInit() {
  }
  //en el html => <form (ngSubmit)="enviar($event)"
  enviar(){
    let nombre=this.formulario.controls.nombre.value;
    console.log("enviar Formulario con el nombre:" + nombre);
  }
}
