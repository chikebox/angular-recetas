import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  
  constructor(private fb:FormBuilder, public recetasService: RecetasService) {
    this.crearFormulario();
  }

  ngOnInit() {
  }
  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario= this.fb.group({
      //FormControl (input) =>['value',[Validaciones]]
      nombre : ['',[Validators.required,Validators.minLength(2)]],
      cocinero:['',[Validators.minLength(5)]],
      descripcion:['',[Validators.required,Validators.minLength(100)]],
      gluten:['',[]],
      foto:['',[Validators.required]]
      
    });
  }
  sumitar():void{
    let nombre = this.formulario.value.nombre;
    let foto = this.formulario.value.foto;
    let descripcion = this.formulario.value.descripcion;
    let cocinero = this.formulario.value.cocinero;
    let gluten = this.formulario.value.gluten;
    let ingredientes = [];
    let receta=new Receta(nombre,foto,descripcion,0,cocinero,gluten,ingredientes);
    console.log("FormularioComponent onSubmit");
    //TODO recoger datos del formulario
    
    this.recetasService.crear(receta);
    this.formulario.reset();
    this.crearFormulario();
    $(".close").click();
  }

}
