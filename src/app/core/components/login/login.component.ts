import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  isSubmit: boolean = false;

  loginForm: FormGroup = this.formBuilder.group(
    {
      username: [{ value: '', disabled: this.isLoading }, Validators.required],
      password: [{ value: '', disabled: this.isLoading }, Validators.required],
    }
  )

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
  ) { }

  get username() {
    return this.loginForm.controls['username']!;
  }
  get password() {
    return this.loginForm.controls['password']!;
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.isSubmit = true;
    if(this.loginForm.valid) {
      this.login();
    }
  }

  login() {
    this.showSpinner(true);
    this.authService.login(this.loginForm.value).subscribe(
      {
        next: (res) => {
          this.authService.setUserSession(res);
          this.showSpinner(false);
          this.welcomeUser();
          this.router.navigate(['APP-INCIDENCIAS']);
        },
        error: (err) => {
          if(err.status == 401) {
            this.toastrService.warning("Usuario y/o contraseña incorrecto");
          } else console.error(err);
          this.showSpinner(false);
        },
      }
    )
  }

  welcomeUser() {
    const userSession =  this.authService.getUserSession();
    let fullName = "";
    if(userSession.cliente) {
      const cliente = userSession.cliente;
      fullName = `${cliente.nombre} ${cliente.apellido}`;
    } else {
      const usuario = userSession.usuario!;
      fullName = `${usuario.nombre}`;
    }
    this.toastrService.success(`Bienvenido ${fullName}!`);
  }

  showSpinner(show: boolean) {
    this.isLoading = show;
  }

}
