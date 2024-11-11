import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'incidencias',
        loadChildren: () => import('./pages/incidencias/incidencias.module').then(m => m.IncidenciasModule),
    },
    {
        path: '',
        redirectTo: 'incidencias',
        pathMatch: 'full',
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClienteRoutingModule { }