import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './main/incidencias.component';
import { IncidenciasListComponent } from './pages/incidencias-list/incidencias-list.component';
import { MatIconModule } from '@angular/material/icon';
import { IncidenciasNewComponent } from './pages/incidencias-new/incidencias-new.component';
import { IncidenciasFormComponent } from './components/incidencias-form/incidencias-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    IncidenciasComponent,
    IncidenciasListComponent,
    IncidenciasNewComponent,
    IncidenciasFormComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class IncidenciasModule { }
