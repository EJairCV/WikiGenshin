import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PersonajeServiceService } from '../personaje-service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajeService:PersonajeServiceService) {

   }
  personajes:any=[];
  elemento:string="";
  arma:string="";
  ngOnInit(): void {
    this.cargarPersonajes(); 
  }

  public cargarPersonajes(){
    this.personajeService.getPersonajes().subscribe(
      response =>{
        console.log(response);
        this.personajes=response;
      }
    )
  }
  public filtrarElemento(elemento:string){
    this.elemento=elemento;
    this.arma="";
  }
  public filtrarArma(arma:string){
    this.arma=arma;
    this.elemento="";
  }

}
