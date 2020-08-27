import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';
import { Pieza } from '../pieza'
import { Celda } from '../Celda';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ordenBlancas, ordenNegras, fichas } from './Fichas';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComunicacionComponent } from '../comunicacion/comunicacion.component';
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  nom1 = this.route.snapshot.paramMap.get('id1')
  nom2 = this.route.snapshot.paramMap.get('id2')

  Coordenadas:string;

  jugador1: Jugador = {
    id: 1,
    nombre: this.nom1
  };
  jugador2: Jugador = {
    id: 2,
    nombre: this.nom2
  };

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  inicializarTablero() {
    for (let index = 0; index < 8; index++) {
      this.tablero[0][index] = this.posicionFichas.blancas.primeraLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[1][index] = this.posicionFichas.blancas.segundaLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[6][index] = this.posicionFichas.negras.segundaLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[7][index] = this.posicionFichas.negras.primeraLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[2][index] = null;
      this.tablero[3][index] = null;
      this.tablero[4][index] = null;
      this.tablero[5][index] = null;
    }
    this.infoCargada = true;
  }

  fichas = fichas;
  contador: number = 0;

  posicionFichas = {
    blancas: ordenBlancas,
    negras: ordenNegras
  };

  fichaSeleccionada: any;
  posicionSeleccionada: any;

  filas = [];
  tablero = [];
  torre = [0, 0];
  infoCargada: Boolean = false;

  ngOnInit(): void {
    this.construirTabla();
    this.construirTablero();
  }

  construirTabla(): void {
    for (let i = 0; i < 8; i++) {
      this.filas[i] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          this.filas[i][j] = {
            clase: 'posicion2',
            ubicacion: {
              x: i,
              y: j
            }
          }
            ;
        } else {
          this.filas[i][j] = {
            clase: 'posicion1',
            ubicacion: {
              x: i,
              y: j
            }
          };
        }
      }
    }
  }

  construirTablero(): void {
    for (let i = 0; i < 8; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < 8; j++) {
        this.tablero[i][j] = '';
      }
    }
    this.cargarFichas();
  }

  cargarFichas(): void {
    for (let index = 0; index < 8; index++) {
      this.tablero[0][index] = this.posicionFichas.blancas.primeraLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[1][index] = this.posicionFichas.blancas.segundaLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[6][index] = this.posicionFichas.negras.segundaLinea[index];
    }
    for (let index = 0; index < 8; index++) {
      this.tablero[7][index] = this.posicionFichas.negras.primeraLinea[index];
    }
    this.infoCargada = true;
  }

  buscarFicha(e): string {
    return this.tablero[e.ubicacion.x][e.ubicacion.y];
  }

  seleccionarFicha(e): void {
    const fichaElegida = this.fichas.find(element => element.icono === this.buscarFicha(e));
    const posicion = e;
    this.Coordenadas = e.ubicacion.x +""+ e.ubicacion.y;
    if (this.contador === 0) {
      this.contador = 1;
      this.fichaSeleccionada = fichaElegida;
      this.posicionSeleccionada = posicion;
    } else {
      this.contador = 0;
      this.tablero[e.ubicacion.x][e.ubicacion.y] = this.fichaSeleccionada.icono;
      this.tablero[this.posicionSeleccionada.ubicacion.x][this.posicionSeleccionada.ubicacion.y] = [];
    }
  }

  getCoordenada(){
    alert(this.Coordenadas)
    return this.Coordenadas;
  }

}