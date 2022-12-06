import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  name:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap.get("busqueda"));
      this.name=paramMap.get("busqueda");
    });
  }

}
