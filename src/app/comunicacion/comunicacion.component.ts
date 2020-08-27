import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandosService } from '../comandos.service';
import { TableroComponent } from '../tablero/tablero.component';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css'],
  providers: [ComandosService]
})
export class ComunicacionComponent implements OnInit {

  comando = "prueba";
  resultado = "";
  coordenadas;
  constructor(private http: ComandosService) {
   }

  enviarComando(){
    let coordenadas:string = document.getElementById("movimiento").innerHTML;
    this.coordenadas = coordenadas;
    this.comando = coordenadas;
    alert(this.comando);
    this.http.respuestaLlamadoServlet("Hola").subscribe((data:any)=>{
      this.resultado = data.comando;
      for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
          document.getElementById(i+""+j).innerHTML = "";
          alert(document.getElementById(i+""+j).innerHTML = "");
        }
      }
    });
  }

  ngOnInit() {
    
  }

}