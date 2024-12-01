import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'clientes',
        loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule),
    },
    {
        path: 'incidencias',
        loadChildren: () => import('./pages/incidencias-cliente/incidencias-cliente.module').then(m => m.IncidenciasClienteModule),
    },
    {
        path: '',
        redirectTo: 'clientes',
        pathMatch: 'full',
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColaboradorRoutingModule { }