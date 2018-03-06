import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
import { RecetasService } from '../providers/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  menu:Array<Receta>;
  recetaSeleccionada:Receta;
  constructor(public recetasService:RecetasService) {
    this.menu= recetasService.getAll();
    this.recetaSeleccionada=new Receta(0,'','','',0,'',true,[]);
   }

  ngOnInit() {
  }
  seleccionarReceta(event, receta:Receta){
    console.log("ConcesionarioComponent seleccionarReceta %o", event.receta);
    this.recetaSeleccionada=receta;
    console.log("Coche1 %o",this.recetaSeleccionada);  
  }
}
