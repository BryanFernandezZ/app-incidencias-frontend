import { Component, OnInit } from '@angular/core';
import { IncidenciaDetalleAtencion } from '../../model/incidencia-detalle-atencion.model';
import { IncidenciasClienteService } from '../../services/incidencias-cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atender-incidencia-cliente',
  templateUrl: './atender-incidencia-cliente.component.html',
  styleUrls: ['./atender-incidencia-cliente.component.css']
})
export class AtenderIncidenciaClienteComponent implements OnInit {

  incidenciaDetalle: IncidenciaDetalleAtencion | null = null;

  idIncidencia: number = 0;
  isDetalleLoading: boolean = true;

  constructor(
    private incidenciasClienteService: IncidenciasClienteService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private location: Location,
    private router: Router,
  ) {
    this.idIncidencia = this.activatedRoute.snapshot.params['id'] as number;
  }

  ngOnInit(): void {
    this.obtenerDetalleIncidenciaAtencion();
  }

  obtenerDetalleIncidenciaAtencion() {
    this.isDetalleLoading = true;
    this.incidenciasClienteService.obtenerDetalleIncidenciaAtencion(this.idIncidencia).subscribe(
      {
        next: (res) => this.incidenciaDetalle = res,
        error: (err) => {
          this.isDetalleLoading = false;
          console.error(err);
        },
        complete: () => this.isDetalleLoading = false,
      }
    )
  }

  onConfirmActualizacion() {
    //  2 => SOLUCIONADO
    this.alertService.confirmarActualizarEstadoIncidencia('Solucionado').subscribe(
      {
        next: (isConfirmed) => {
          if (isConfirmed) this.actualizarEstadoIncidencia(2);
        }
      }
    )
  }

  actualizarEstadoIncidencia(idEstado: number) {
    this.incidenciasClienteService.actualizarEstadoIncidencia(this.idIncidencia, idEstado).subscribe(
      {
        next: (res) => console.log(res),
        error: (err) => console.error(err),
        complete: () => {
          this.alertService.successAlertMessage("Incidencia actualizada", "Se actualizo la incidencia correctamente!");
          this.goToIncidenciasList();
        }
      }
    )
  }

  onAtencionPresencial() {
    this.router.navigate(['APP-INCIDENCIAS/colaborador/incidencias/atender/presencial', this.idIncidencia]);
  }

  goToIncidenciasList() {
    this.location.back();
  }

}
