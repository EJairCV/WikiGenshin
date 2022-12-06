import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class NacionesServiceService {

  constructor(private data:DataService) { }


  public getNaciones(){
    return this.data.get("https://api.genshin.dev/nations/");
  }
  public getBuscarNacion(nacion:string){
    return this.data.get("https://api.genshin.dev/nations/"+nacion);
  }

  public getBuscarImagen(nacion:string){
    return "https://api.genshin.dev/nations/"+nacion+"/icon";
  }
}
