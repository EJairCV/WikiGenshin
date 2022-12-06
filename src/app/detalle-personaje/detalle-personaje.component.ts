import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { PersonajeServiceService } from '../personaje-service.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {
  personaje:any={};
  urlFoto:string="";
  name:any;
  constructor(private route:ActivatedRoute, private personajeService:PersonajeServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap.get("name"));
      this.name=paramMap.get("name");
    });
    this.urlFoto= this.personajeService.getPersonajeImagen(this.name,"card");
    this.personajeService.getPersonaje(this.name).subscribe(
      response =>{
        this.personaje=response;
        console.log(this.personaje);
      }
    )
  }
  

}
