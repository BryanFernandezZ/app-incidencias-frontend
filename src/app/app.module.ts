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
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { ApiInterceptor } from './core/api-interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { ColaboradorComponent } from './modules/main/pages/colaborador/colaborador.component';
import { ClienteComponent } from './modules/main/pages/cliente/main/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    InicioComponent,
    NavbarComponent,
    SpinnerComponent,
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
  ],
  exports: [SpinnerComponent],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
