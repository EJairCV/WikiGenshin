import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EnemigosService {

  constructor(private data:DataService) { }

  public getEnemigo(){
    return this.data.get("https://api.genshin.dev/enemies/");
  }
  public buscarEnemigo(nombre:string){
    return this.data.get("https://api.genshin.dev/enemies/"+nombre);
  }
  public imagenEnemig(nombre:string){
    return "https://api.genshin.dev/enemies/"+nombre+"/icon";
  }
}
