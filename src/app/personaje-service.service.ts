import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  personajes:any=[];

  constructor(private data:DataService) {
    
   }

  public getPersonajes(){
    return this.data.get("https://api.genshin.dev/characters");
  }
  public getPersonaje(personaje:string){
    return this.data.get("https://api.genshin.dev/characters/"+personaje);
  }
  
  public getPersonajeImagen(personaje:string,tipoImagen:string){
    return "https://api.genshin.dev/characters/"+personaje+"/"+tipoImagen;
  }

  
}
