import { Component, OnInit } from '@angular/core';
import {Usuario} from "../model/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor() {
    this.usuario=new Usuario("Defecto");

   }

  ngOnInit() {
  }

}
