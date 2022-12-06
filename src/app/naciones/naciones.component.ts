import { Component, OnInit } from '@angular/core';
import { NacionesServiceService } from '../naciones-service.service';

@Component({
  selector: 'app-naciones',
  templateUrl: './naciones.component.html',
  styleUrls: ['./naciones.component.css']
})
export class NacionesComponent implements OnInit {

  constructor(private nacionServicio:NacionesServiceService) { }

  naciones:any=[];

  ngOnInit(): void {
    this.getNaciones()
  }

  public getNaciones(){
    this.nacionServicio.getNaciones().subscribe(
      res=>{
        this.naciones=res;
    })
  }

}
