import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  ingredientes : FormArray;
  constructor(private fb:FormBuilder, public recetasService: RecetasService) {
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
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
      gluten:['false',[]],
      foto:['https://comerbeber.com/archivos/imagen/libordecocina.jpg',[Validators.required]],
      ingredientes : this.fb.array([ this.createIngredienteFormGroup() ])
      
    });
  }
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }
  clickOtroIngrediente(){
    console.log('FormularioComponent clickOtroIngrediente');    
    this.ingredientes.push( this.createIngredienteFormGroup() );
  }

  clickEliminarIngrediente( index ){
    console.log('FormularioComponent clickEliminarIngrediente');    
    this.ingredientes.removeAt(index);
  }
  sumitar():void{
    let nombre = this.formulario.value.nombre;
    let foto = this.formulario.value.foto;
    let descripcion = this.formulario.value.descripcion;
    let cocinero = this.formulario.value.cocinero;
    let gluten = (this.formulario.value.gluten==="true")?true:false;
    
    let receta=new Receta(nombre,foto,descripcion,0,cocinero,gluten);
    console.log("FormularioComponent onSubmit");
    this.formulario.value.ingredientes.map(element => {
      receta.ingredientes.push( element.nombre );
    });

    this.recetasService.crear(receta);
    this.formulario.reset({
      gluten : "false",
      foto : "https://comerbeber.com/archivos/imagen/libordecocina.jpg"

    });
    
    this.ingredientes.controls.splice(1);
    $(".close").click();
  }
  estilosInput(control : FormControl):string{
    const CLASS_SUCCESS = "form-group has-success";
    const CLASS_ERROR = "form-group has-error";
    if (control.dirty){
      return (control.valid)?CLASS_SUCCESS:CLASS_ERROR;
    }
    else{
      return("form-group");
    }
    
  }
}
