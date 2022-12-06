import { Component, Input, OnInit } from '@angular/core';
import { NacionesServiceService } from '../naciones-service.service';

@Component({
  selector: 'app-naciones-hijo',
  templateUrl: './naciones-hijo.component.html',
  styleUrls: ['./naciones-hijo.component.css']
})
export class NacionesHijoComponent implements OnInit {

  constructor(private nacionesServicio:NacionesServiceService) { }
  @Input() nacionNombre:string="";

  nacion:any=[];
  urlFoto:string="";
  ngOnInit(): void {
    this.buscarNacion()
    this.urlFoto=this.nacionesServicio.getBuscarImagen(this.nacionNombre);
  }
  public buscarNacion(){
    this.nacionesServicio.getBuscarNacion(this.nacionNombre).subscribe(
      res=>{
        this.nacion=res;
      }
    )
  }

}
