import { Component, Input, OnInit } from '@angular/core';
import { EnemigosService } from '../enemigos.service';

@Component({
  selector: 'app-enemigos-hijo',
  templateUrl: './enemigos-hijo.component.html',
  styleUrls: ['./enemigos-hijo.component.css']
})
export class EnemigosHijoComponent implements OnInit {

  @Input() nombreEnemigo:string="";

  enemigo:any=[];
  urlFoto:string="";
  constructor(private enemigosServicio:EnemigosService) { }

  ngOnInit(): void {
    this.buscarEnemigo();
    this.urlFoto=this.enemigosServicio.imagenEnemig(this.nombreEnemigo);
    
  }
  public buscarEnemigo(){
    this.enemigosServicio.buscarEnemigo(this.nombreEnemigo).subscribe(
      res=>{
        this.enemigo=res;
      }
    )
  }


}
