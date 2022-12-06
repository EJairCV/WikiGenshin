import { Component, OnInit } from '@angular/core';
import { EnemigosService } from '../enemigos.service';

@Component({
  selector: 'app-enemigos',
  templateUrl: './enemigos.component.html',
  styleUrls: ['./enemigos.component.css']
})
export class EnemigosComponent implements OnInit {

  constructor(private enemigosServicio:EnemigosService) { }


  enemigos:any=[];
  ngOnInit(): void {
    this.getEnemigos();
  }
  public getEnemigos(){
    this.enemigosServicio.getEnemigo().subscribe(
      res=>{
        this.enemigos=res;
      }
    )
  }

}
