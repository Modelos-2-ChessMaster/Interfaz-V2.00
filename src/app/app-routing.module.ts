import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoUsuComponent } from '../app/IngresoUsu/IngresoUsu.component';
import { TableroComponent } from '../app/tablero/tablero.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';


const routes: Routes = [
  {path: 'IngresoUsuComponent',component: IngresoUsuComponent},
  {path: 'Tablero/:id1/:id2',component: TableroComponent},
  {path: 'Tablero/:id1/:id2/comunicacion/:coordenadas',component: ComunicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}