import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './pages/clientes/main/clientes.component';
import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { IncidenciasClienteComponent } from './pages/incidencias-cliente/main/incidencias-cliente.component';



@NgModule({
  declarations: [
    ClientesComponent,
    IncidenciasClienteComponent
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
  ]
})
export class ColaboradorModule { }
