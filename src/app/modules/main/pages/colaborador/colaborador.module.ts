import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './pages/clientes/main/clientes.component';
import { ColaboradorRoutingModule } from './colaborador-routing.module';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
  ]
})
export class ColaboradorModule { }
