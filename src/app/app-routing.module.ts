import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './modules/main/main/main.component';
import { InicioComponent } from './modules/main/pages/inicio/inicio.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: "APP-INCIDENCIAS",
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'Inicio',
      },
      {
        path: 'incidencias',
        loadChildren: () => import('./modules/main/pages/incidencias/incidencias.module').then(m => m.IncidenciasModule),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
