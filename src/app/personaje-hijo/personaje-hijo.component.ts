import { Component, Input, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../personaje-service.service';

@Component({
  selector: 'app-personaje-hijo',
  templateUrl: './personaje-hijo.component.html',
  styleUrls: ['./personaje-hijo.component.css']
})
export class PersonajeHijoComponent implements OnInit {
  @Input() personajeNombre:string="";
  @Input() personajeElemento:string="";
  @Input() personajeArma:string="";
  constructor(private personajeService:PersonajeServiceService) {
    
  }
  personaje:any={};
  urlFoto:string="";

  


  ngOnInit(): void {
    this.getPersonaje(this.personajeNombre);
    this.urlFoto=this.personajeService.getPersonajeImagen(this.personajeNombre,"icon");
    
    
  }
  public getPersonaje(personaje:string){
    this.personajeService.getPersonaje(personaje).subscribe(
      response =>{
        this.personaje=response;
        console.log(this.personaje);
      }
    )
  }
  

  public filtrar(){
    if (this.personajeElemento=="" && this.personajeArma=="") {
      return true
    } else if (this.personajeElemento==this.personaje.vision) {
      return true
    } else if (this.personajeArma ==this.personaje.weapon) {
      return true
    } else {
      return false
    }
  }

  
}
