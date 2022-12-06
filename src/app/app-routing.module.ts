import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtefactosComponent } from './artefactos/artefactos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetalleArtefactosComponent } from './detalle-artefactos/detalle-artefactos.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { EnemigosDetalleComponent } from './enemigos-detalle/enemigos-detalle.component';
import { EnemigosComponent } from './enemigos/enemigos.component';
import { HomeComponent } from './home/home.component';
import { NacionesComponent } from './naciones/naciones.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"personajes",component:PersonajesComponent},
  {path:"detalle-personaje/:name",component:DetallePersonajeComponent},
  {path:"busqueda/:busqueda",component:BusquedaComponent},
  {path:"artefactos",component:ArtefactosComponent},
  {path:"detalle-artefactos/:artefacto",component:DetalleArtefactosComponent},
  {path:"naciones",component:NacionesComponent},
  {path:"enemigos",component:EnemigosComponent},
  {path:"enemigos-detalle/:enemigo",component:EnemigosDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
