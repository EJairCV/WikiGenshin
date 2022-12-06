import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeHijoComponent } from './personaje-hijo/personaje-hijo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import {HttpClientModule} from "@angular/common/http";
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ArtefactosComponent } from './artefactos/artefactos.component';
import { ArtefactosHijoComponent } from './artefactos-hijo/artefactos-hijo.component';
import { DetalleArtefactosComponent } from './detalle-artefactos/detalle-artefactos.component';
import { NacionesComponent } from './naciones/naciones.component';
import { NacionesHijoComponent } from './naciones-hijo/naciones-hijo.component';
import { EnemigosComponent } from './enemigos/enemigos.component';
import { EnemigosHijoComponent } from './enemigos-hijo/enemigos-hijo.component';
import { EnemigosDetalleComponent } from './enemigos-detalle/enemigos-detalle.component';


const appRoutes:Routes=[
  
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonajesComponent,
    PersonajeHijoComponent,
    DetallePersonajeComponent,
    BusquedaComponent,
    ArtefactosComponent,
    ArtefactosHijoComponent,
    DetalleArtefactosComponent,
    NacionesComponent,
    NacionesHijoComponent,
    EnemigosComponent,
    EnemigosHijoComponent,
    EnemigosDetalleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
