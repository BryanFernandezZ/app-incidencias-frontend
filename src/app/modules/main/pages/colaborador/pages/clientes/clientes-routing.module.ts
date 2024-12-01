import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesListComponent } from "./pages/clientes-list/clientes-list.component";
import { DispositivosClienteComponent } from "./pages/dispositivos-cliente/dispositivos-cliente.component";
import { ClientesNewComponent } from "./pages/clientes-new/clientes-new.component";
import { VincularDispositivoComponent } from "./pages/vincular-dispositivo/vincular-dispositivo.component";

const routes: Routes = [
    {
        path: '',
        component: ClientesListComponent,
        title: 'Clientes registrados',
    },
    {
        path: 'registrar',
        component: ClientesNewComponent,
        title: 'Nuevo cliente',
    },
    {
        path: 'dispositivos',
        component: DispositivosClienteComponent,
        title: 'Dispositivos vinculados',
    },
    {
        path: 'dispositivos/vincular/:id',
        component: VincularDispositivoComponent,
        title: 'Vincular dispositivo',
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }