import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  admin:boolean;
  constructor() {
    console.log("PlantillaComponent contructor");
    this.admin=true;
   }

  ngOnInit() {
    console.log("PlantillaComponent ngOnInit");
  }
  switchUser(){
    this.admin=!this.admin;
  }
}
