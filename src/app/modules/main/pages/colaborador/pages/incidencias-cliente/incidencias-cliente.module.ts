import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenciasClienteListComponent } from './pages/incidencias-cliente-list/incidencias-cliente-list.component';
import { IncidenciasClienteRoutingModule } from './incidencias-cliente-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AtenderIncidenciaClienteComponent } from './pages/atender-incidencia-cliente/atender-incidencia-cliente.component';
import { SharedModule } from "../../../../../../shared/shared.module";
import { AtencionPresencialComponent } from './pages/atencion-presencial/atencion-presencial.component';


@NgModule({
  declarations: [
    IncidenciasClienteListComponent,
    AtenderIncidenciaClienteComponent,
    AtencionPresencialComponent,
  ],
  imports: [
    CommonModule,
    IncidenciasClienteRoutingModule,
    MatIconModule,
    SharedModule
]
})
export class IncidenciasClienteModule { }
