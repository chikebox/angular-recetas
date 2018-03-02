import { Component, OnInit } from '@angular/core';
import {Usuario, Sexo} from "../model/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor() {
    this.usuario=new Usuario("Hola","Mundo","hola@mundo.com","https://3.bp.blogspot.com/-ryouFrHTQaQ/V6tCHQQlw-I/AAAAAAAABuE/NCOsAe76xDo-K3jtk56piO8M_kFRThRhQCPcB/s1600/hola-mundo-en-c.jpg",);

   }

  ngOnInit() {
  }

}
