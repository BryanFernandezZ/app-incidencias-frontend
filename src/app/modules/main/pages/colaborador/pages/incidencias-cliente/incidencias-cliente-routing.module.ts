import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IncidenciasClienteListComponent } from "./pages/incidencias-cliente-list/incidencias-cliente-list.component";
import { AtenderIncidenciaClienteComponent } from "./pages/atender-incidencia-cliente/atender-incidencia-cliente.component";
import { AtencionPresencialComponent } from "./pages/atencion-presencial/atencion-presencial.component";

const routes: Routes = [
    {
        path: '',
        component: IncidenciasClienteListComponent,
        title: 'Incidencias',
    },
    {
        path: 'atender/:id',
        component: AtenderIncidenciaClienteComponent,
        title: 'Atender Incidencia',
    },
    {
        path: 'atender/presencial/:id',
        component: AtencionPresencialComponent,
        title: 'Atencion presencial',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncidenciasClienteRoutingModule {}