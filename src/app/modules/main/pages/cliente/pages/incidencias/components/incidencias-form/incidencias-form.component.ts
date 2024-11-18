import { Component, Input, OnInit } from '@angular/core';
import { IncidenciaRequesDto } from '../../dto/incidencia.request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidenciaService } from '../../services/incidencia.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DispositivoCliente } from 'src/app/shared/model/dispositivo-cliente.model';
import { ActivatedRoute } from '@angular/router';
import { Incidencia } from '../../model/incidencia.model';
import { DispositivoService } from 'src/app/shared/services/dispositivo.service';

@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})
export class IncidenciasFormComponent implements OnInit {

  @Input() title: string = "";
  @Input() isEdit: boolean = false;

  devicesList: Array<DispositivoCliente> = [];

  clientId: number = 0;
  incidenciaId: number = 0;

  selectedImage: File | null = null;
  imageUrl: string | ArrayBuffer | null | undefined = null;

  isSubmit: boolean = false;
  isLoading: boolean = false;

  incidenciaForm: FormGroup = this.formBuilder.group(
    {
      contrato: [null, Validators.required],
      asunto: [null, Validators.required],
      detalle: [null, Validators.required],
      image: [null],
    }
  )

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private incidenciaService: IncidenciaService,
    private dispositivoService: DispositivoService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.clientId = this.authService.getUserSession().cliente?.idCliente ?? 0;
    this.incidenciaId = this.activatedRoute.snapshot.params['id'];
  }

  get contrato() {
    return this.incidenciaForm.controls['contrato']!;
  }
  get asunto() {
    return this.incidenciaForm.controls['asunto']!;
  }
  get detalle() {
    return this.incidenciaForm.controls['detalle']!;
  }
  get image() {
    return this.incidenciaForm.controls['image']!;
  }

  ngOnInit(): void {
    this.getDevicesByClient();
    this.checkCurrentAction();
  }

  checkCurrentAction() {
    if(this.isEdit) {
      this.obtenerIncidenciaPorId();
    }
  }

  obtenerIncidenciaPorId() {
    this.incidenciaService.obtenerIncidencia(this.incidenciaId).subscribe(
        {
          next: (res) => this.setIncidenciaData(res),
          error: (err) => console.error(err),
          complete: () => {}
        }
      )
  }

  setIncidenciaData(incidencia: Incidencia | null): void {
    if(incidencia !== null) {
      this.contrato.setValue(incidencia.idContrato);
      this.asunto.setValue(incidencia.asunto);
      this.detalle.setValue(incidencia.detalle);
      this.image.setValue(null);
      this.imageUrl = incidencia.imagen;
    }
  }

  getDevicesByClient() {
    this.dispositivoService.getDevicesByClientId(this.clientId).subscribe(
      {
        next: (res) => this.devicesList = res,
        error: (err) => console.error(err),
        complete: () => {},
      }
    )
  }

  onFileChange(event: any) {
    this.selectedImage = <File>event.target.files[0];
    this.setImageUrl(this.selectedImage);
  }

  setImageUrl(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.imageUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  onSaveIncidencia() {
    this.isSubmit = true;
    if(this.incidenciaForm.valid) {
      //  SAVE INCIDENCIA
      this.isLoading = true;
      const incidenciaRequest = this.createIncidenciaRequest();
      if(this.isEdit) {
        //  ACTUALIZAR INCIDENCIA
        this.incidenciaService.updateIncidencia(this.incidenciaId, incidenciaRequest, this.selectedImage!).subscribe(
          {
            next: (res) => console.log(res),
            error: (err) => {
              this.isLoading = false;
              console.error(err);
            },
            complete: () => {
              this.resetAll();
              this.alertService.successAlertMessage("Incidencia actualizada", "Se actualizo la incidencia correctamente!");
              this.obtenerIncidenciaPorId();
            }
          }
        )
      } else {
        //  REGISTRAR INCIDENCIA
        this.incidenciaService.createIncidencia(incidenciaRequest, this.selectedImage!).subscribe(
          {
            next: (res) => console.log(res),
            error: (err) => {
              this.isLoading = false;
              console.error(err);
            },
            complete: () => {
              this.resetAll();
              this.alertService.successAlertMessage("Incidencia registrada", "Se registro la incidencia correctamente!");
            }
          }
        )
      }
    }
  }

  createIncidenciaRequest(): IncidenciaRequesDto {
    console.log(this.contrato.value);
    return {
      asunto: this.asunto.value,
      detalle: this.detalle.value,
      usuarioAsignado: null,
      idContrato: parseInt(this.contrato.value),
    }
  }

  resetAll() {
    this.isSubmit = false;
    this.isLoading = false;
    this.selectedImage = null;
    this.imageUrl = undefined;
    this.contrato.setValue(null);
    this.asunto.setValue(null);
    this.detalle.setValue(null);
    this.image.setValue(null);
  }
}
