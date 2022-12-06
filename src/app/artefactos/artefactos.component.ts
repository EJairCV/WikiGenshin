import { Component, Input, OnInit } from '@angular/core';
import { ArtefactosServiceService } from '../artefactos-service.service';

@Component({
  selector: 'app-artefactos',
  templateUrl: './artefactos.component.html',
  styleUrls: ['./artefactos.component.css']
})
export class ArtefactosComponent implements OnInit {

  constructor(private servicioArtefactos:ArtefactosServiceService) { }

  artefactos:any=[];
  
  ngOnInit(): void {
    this.cargarArtefactos();
  }

  public cargarArtefactos(){
    this.servicioArtefactos.getArtefactos().subscribe(
      res=>{
        this.artefactos=res;
        console.log(this.artefactos);

    })
  }



}
