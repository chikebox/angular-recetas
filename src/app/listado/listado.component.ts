import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input('stock') stock:Array<Coche>;
  @Output() eventoEmitir= new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  /*
  *Función para emitir el evento desde el hijo hacia el padre
  */
 seleccionar($event, coche:Coche){
  console.log('Emitimos el evento al padre')
  this.eventoEmitir.emit({coche:coche});
}

}
