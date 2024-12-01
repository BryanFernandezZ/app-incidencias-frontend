import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IncidenciasClienteListComponent } from "./pages/incidencias-cliente-list/incidencias-cliente-list.component";
import { AtenderIncidenciaClienteComponent } from "./pages/atender-incidencia-cliente/atender-incidencia-cliente.component";

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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncidenciasClienteRoutingModule {}