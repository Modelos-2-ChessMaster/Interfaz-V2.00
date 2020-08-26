import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TableroComponent } from '../tablero/tablero.component';

@Component({
  selector: 'app-IngresoUsu',
  templateUrl: './IngresoUsu.component.html',
  styleUrls: ['./IngresoUsu.component.css']
})


export class IngresoUsuComponent implements OnInit {
  valor1='1'
  valor2='2'
  verBoton : boolean =true;

  constructor(private router:Router,private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }
  
  CrearTB(id1:String,id2:String){
    this.router.navigate(['/Tablero',id1,id2]);
    this.verBoton = false;
  }
  
}
