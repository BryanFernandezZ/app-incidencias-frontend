import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from 'src/app/shared/model/dispositivo.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DispositivoService } from 'src/app/shared/services/dispositivo.service';

@Component({
  selector: 'app-vincular-dispositivo',
  templateUrl: './vincular-dispositivo.component.html',
  styleUrls: ['./vincular-dispositivo.component.css']
})
export class VincularDispositivoComponent implements OnInit {

  dispositivosList: Array<Dispositivo> = [];

  clienteId: number = 0;

  isDispositivosLoading: boolean = false;
  isVincularDispositivoLoading: boolean = false;
  isSubmit: boolean = false;

  dispositivoForm: FormGroup = this.formBuilder.group(
    {
      nombre: ['']
    }
  )

  vincularDispositivoForm: FormGroup = this.formBuilder.group(
    {
      idDispositivo: [null, Validators.required],
      ubicacionReferencial: [null, Validators.required],
      nombreDispositivo: [null],
    }
  )

  constructor(
    private dispositivoService: DispositivoService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
  ) {
    this.clienteId = this.activatedRoute.snapshot.params['id'] as number;
  }

  get nombre() {
    return this.dispositivoForm.controls['nombre']!;
  }

  get idDispositivo() {
    return this.vincularDispositivoForm.controls['idDispositivo']!;
  }
  get ubicacionReferencial() {
    return this.vincularDispositivoForm.controls['ubicacionReferencial']!;
  }
  get nombreDispositivo() {
    return this.vincularDispositivoForm.controls['nombreDispositivo']!;
  }

  ngOnInit(): void {

  }

  onBuscarDispositivos() {
    this.isDispositivosLoading = true;
    this.dispositivoService.listarDispositivos(this.nombre.value).subscribe(
      {
        next: (res) => this.dispositivosList = res,
        error: (err) => {
          this.isDispositivosLoading = false;
          console.error(err);
        },
        complete: () => this.isDispositivosLoading = false,
      }
    )
  }

  onSeleccionarDispositivo(idDispositivo: number, nombreDispositivo: string) {
    this.idDispositivo.setValue(idDispositivo);
    this.nombreDispositivo.setValue(nombreDispositivo);
  }

  onVincularDispositivo() {
    this.isSubmit = true;
    if(this.vincularDispositivoForm.valid) {
      this.vincularDispositivo();
    }
  }

  vincularDispositivo() {
    this.isVincularDispositivoLoading = true;
    this.dispositivoService.vincularDispositivo(
      this.clienteId, parseInt(this.idDispositivo.value), this.ubicacionReferencial.value
    ).subscribe(
      {
        next: (res) => console.log(res),
        error: (err) => {
          this.isVincularDispositivoLoading = false;
          console.error(err);
        },
        complete: () => {
          this.isVincularDispositivoLoading = false;
          this.resetAll();
          this.alertService.successAlertMessage('Dispositivo vinculado', 'Se vinculó el dispositivo correctamente');
        }
      }
    )
  }

  resetAll() {
    this.dispositivosList = [];
    this.isDispositivosLoading = false;
    this.isVincularDispositivoLoading = false;
    this.isSubmit = false;

    this.nombre.setValue('');

    this.idDispositivo.setValue(null);
    this.nombreDispositivo.setValue(null);
    this.ubicacionReferencial.setValue(null);
  }

}
