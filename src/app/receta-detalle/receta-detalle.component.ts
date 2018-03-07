import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Receta } from '../model/receta';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {
  @Input('receta') receta:Receta;
  constructor() { 
  }
  ngOnInit() {
  }
}
