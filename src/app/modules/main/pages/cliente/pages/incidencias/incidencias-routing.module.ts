import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IncidenciasListComponent } from "./pages/incidencias-list/incidencias-list.component";
import { IncidenciasNewComponent } from "./pages/incidencias-new/incidencias-new.component";
import { IncidenciasEditComponent } from "./pages/incidencias-edit/incidencias-edit.component";

const routes: Routes = [
    {
        path: '',
        component: IncidenciasListComponent,
        title: 'Mis Incidencias',
    },
    {
        path: 'registrar',
        component: IncidenciasNewComponent,
        title: 'Registrar incidencia',
    },
    {
        path: 'editar/:id',
        component: IncidenciasEditComponent,
        title: 'Editar incidencia',
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncidenciasRoutingModule { }