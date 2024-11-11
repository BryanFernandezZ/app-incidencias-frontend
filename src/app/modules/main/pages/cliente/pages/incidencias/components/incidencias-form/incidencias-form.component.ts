import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IncidenciaRequesDto } from '../../dto/incidencia.request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidenciaService } from '../../services/incidencia.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DispositivoService } from 'src/app/shared/services/dispositivo.service';
import { DispositivoCliente } from 'src/app/shared/model/dispositivo-cliente.model';
import { ContratoService } from 'src/app/shared/services/contrato.service';
import { ContratoClienteDispositivo } from 'src/app/shared/model/contrato-dispositivo.model';

@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})
export class IncidenciasFormComponent implements OnInit {

  @Input() title: string = "";
  @Input() isEdit: boolean = false;

  devicesList: Array<DispositivoCliente> = [];
  contratoList: Array<ContratoClienteDispositivo> = [];

  clientId: number = 0;

  selectedImage: File | null = null;
  imageUrl: string | ArrayBuffer | null | undefined = null;

  isSubmit: boolean = false;
  isLoading: boolean = false;

  incidenciaForm: FormGroup = this.formBuilder.group(
    {
      contrato: [null, Validators.required],
      asunto: [null, Validators.required],
      detalle: [null, Validators.required],
      image: [null, Validators.required],
    }
  )

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private incidenciaService: IncidenciaService,
    private contratoService: ContratoService,
    private alertService: AlertService,
  ) {
    this.clientId = this.authService.getUserSession().cliente?.idCliente ?? 0;
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
  }

  getDevicesByClient() {
    this.contratoService.getContratosByClient(this.clientId).subscribe(
      {
        next: (res) => this.contratoList = res,
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

  createIncidenciaRequest(): IncidenciaRequesDto {
    console.log(this.contrato.value);
    return {
      asunto: this.asunto.value,
      detalle: this.detalle.value,
      calificacion: 0,
      pendiente: true,
      presencial: false,
      solucionado: false,
      usuarioAsignado: null,
      cliente: {
        idCliente: this.clientId,
      },
      contrato: {
        idContrato: parseInt(this.contrato.value),
      }
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
