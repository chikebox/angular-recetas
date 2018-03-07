import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { AppRouter } from './app.routes';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './listado/listado.component';
import { CochesService } from './providers/coches.service';
import { PipeResolver } from '@angular/compiler';
import { RoundPipe } from './pipes/pipeRound';
import { FormsModule } from '@angular/forms'
import { FilterPipe } from './pipes/filterpipe';

import { RecetarioComponent } from './recetario/recetario.component';
import { RecetasService } from './providers/recetas.service';
import { FilterReceta } from './pipes/filterRecetas';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';
import { FilterGluten } from './pipes/glutenpipe';
import { FormularioComponent } from './recetario/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    FilterReceta,
    FilterGluten,
    RecetarioComponent,
    RecetaDetalleComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [
    CochesService,
    RecetasService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
