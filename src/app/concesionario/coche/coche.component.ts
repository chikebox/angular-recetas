import { Component, OnInit, Input} from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {
  //Parámetro de entrada desde el componente padre al hijo
  @Input('cocheParametro') coche:Coche;
  @Input('coche1') coche1:Coche;
  @Input('coche2') coche2:Coche;
  //Los parámetros de salida se hace a través de eventos
  

  ngOnInit() {
    console.log(this.coche1);
    console.log(this.coche2)
  }
  
}
