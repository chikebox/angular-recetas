import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CochesService } from '../../providers/coches.service';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-formularioCoche',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioCocheComponent implements OnInit {
  formulario:FormGroup;
  ingredientes : FormArray;
  constructor(private fb:FormBuilder, public cochesService: CochesService) {
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
  }
  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario= this.fb.group({
      //FormControl (input) =>['value',[Validaciones]]
      marca : ['',[Validators.required,Validators.minLength(2)]],
      modelo:['',[Validators.minLength(5)]],
      version:[''],
      foto:['https://www.vinilowcost.com/2314-thickbox_default/coche.jpg',[Validators.required]],
      puertas:['0'],
      caballos:['0'],
      consumo:['0']
      
    });
  }
  sumitar():void{
    let marca = this.formulario.value.marca;
    let modelo = this.formulario.value.modelo;
    let version = this.formulario.value.version;
    let foto = this.formulario.value.foto;
    let puertas = this.formulario.value.puertas
    let caballos = this.formulario.value.caballos;
    let consumo = this.formulario.value.consumo;;
    
    let coche=new Coche(marca,modelo,version,foto,puertas,caballos,consumo)
    console.log("FormularioComponent onSubmit");

    this.cochesService.crear(coche);
    this.formulario.reset();
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
