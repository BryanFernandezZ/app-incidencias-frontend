import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { ClienteRequestDto } from '../../dto/cliente.request';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  @Input() title: string = "";

  isSubmit: boolean = false;
  isLoading: boolean = false;

  clienteForm: FormGroup = this.formBuilder.group(
    {
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      contrasena: [null, [Validators.required]],
    }
  )

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private alertService: AlertService,
  ) { }

  get nombre() {
    return this.clienteForm.controls['nombre']!;
  }
  get apellido() {
    return this.clienteForm.controls['apellido']!;
  }
  get direccion() {
    return this.clienteForm.controls['direccion']!;
  }
  get telefono() {
    return this.clienteForm.controls['telefono']!;
  }
  get usuario() {
    return this.clienteForm.controls['usuario']!;
  }
  get contrasena() {
    return this.clienteForm.controls['contrasena']!;
  }

  ngOnInit(): void {
  }

  onRegistrarCliente() {
    this.isSubmit = true;
    if(this.clienteForm.valid) {
      this.registrarCliente();
    }
  }

  registrarCliente() {
    this.isLoading = true;
    const clienteRequest = this.crearClienteRequest();
    this.clientesService.registrarCliente(clienteRequest).subscribe(
      {
        next: (res) => console.log(res),
        error: (err) => {
          this.isLoading = false;
          console.error(err.message);
        },
        complete: () => {
          this.resetAll();
          this.alertService.successAlertMessage("Cliente registrado", "Se registro correctamente");
        },
      }
    )
  }

  resetAll() {
    this.isLoading = false;
    this.isSubmit = false;
    this.nombre.setValue(null);
    this.apellido.setValue(null);
    this.direccion.setValue(null);
    this.telefono.setValue(null);
    this.usuario.setValue(null);
    this.contrasena.setValue(null);
  }

  crearClienteRequest(): ClienteRequestDto {
    return {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      direccion: this.direccion.value,
      telefono: this.telefono.value,
      usuario: this.usuario.value,
      contrasena: this.contrasena.value,
    }
  }

}
