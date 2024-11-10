import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './main/incidencias.component';
import { IncidenciasListComponent } from './pages/incidencias-list/incidencias-list.component';
import { MatIconModule } from '@angular/material/icon';
import { IncidenciasNewComponent } from './pages/incidencias-new/incidencias-new.component';

@NgModule({
  declarations: [
    IncidenciasComponent,
    IncidenciasListComponent,
    IncidenciasNewComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    MatIconModule,
  ]
})
export class IncidenciasModule { }
