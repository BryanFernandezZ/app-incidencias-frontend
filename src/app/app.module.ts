import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './modules/main/main/main.component';
import { InicioComponent } from './modules/main/pages/inicio/inicio.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ApiInterceptor } from './core/api-interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { ColaboradorComponent } from './modules/main/pages/colaborador/main/colaborador.component';
import { ClienteComponent } from './modules/main/pages/cliente/main/cliente.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    InicioComponent,
    NavbarComponent,
    ClienteComponent,
    ColaboradorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SharedModule,
  ],
  exports: [SharedModule],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
