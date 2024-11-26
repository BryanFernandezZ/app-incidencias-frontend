import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { MatIconModule } from '@angular/material/icon';
import { DispositivosClienteComponent } from './pages/dispositivos-cliente/dispositivos-cliente.component';
import { ClientesNewComponent } from './pages/clientes-new/clientes-new.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClientesListComponent,
    DispositivosClienteComponent,
    ClientesNewComponent,
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ClientesModule { }
