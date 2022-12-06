import { Component, Input, OnInit } from '@angular/core';
import { ArtefactosServiceService } from '../artefactos-service.service';

@Component({
  selector: 'app-artefactos-hijo',
  templateUrl: './artefactos-hijo.component.html',
  styleUrls: ['./artefactos-hijo.component.css']
})
export class ArtefactosHijoComponent implements OnInit {

  constructor(private servicioArtefacto:ArtefactosServiceService) { }
  @Input() artefactoNombre:string="";

  artefacto:any={};
  urlFoto:string="";
  nombre:any;
  rareza:any;
  bono2:any;
  bono4:any;

  ngOnInit(): void {
    this.buscarArtefacto();
    this.buscarImagen();
    
  }
  public buscarArtefacto(){
    this.servicioArtefacto.getBuscarArtefacto(this.artefactoNombre).subscribe(
      res=>{
        this.artefacto=res;
        console.log(this.artefacto)
        this.prueba()
      }
    )
  }
  public buscarImagen(){
    this.urlFoto=this.servicioArtefacto.getArtefactoImagen(this.artefactoNombre,"circlet-of-logos")
  }
  public prueba(){
    let valores = Object.values(this.artefacto);
    this.nombre=valores[0];
    this.rareza=valores[1];
    this.bono2=valores[2];
    this.bono4=valores[3];
    console.log(valores);
  }
}
