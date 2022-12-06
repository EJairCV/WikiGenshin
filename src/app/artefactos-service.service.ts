import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ArtefactosServiceService {

  constructor(private data:DataService) { }
  public getArtefactos(){
    return this.data.get("https://api.genshin.dev/artifacts");
  }
  public getBuscarArtefacto(artefacto:string){
    return this.data.get("https://api.genshin.dev/artifacts/"+artefacto)
  }
  public getArtefactoImagen(artefactoNombre:string,imagen:string){
    return "https://api.genshin.dev/artifacts/"+artefactoNombre+"/"+imagen
  }
}
