import { Component, OnInit } from '@angular/core';
import { TecnicoDisponibilidad } from '../../model/tecnico-disponibilidad.model';
import { IncidenciasClienteService } from '../../services/incidencias-cliente.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atencion-presencial',
  templateUrl: './atencion-presencial.component.html',
  styleUrls: ['./atencion-presencial.component.css']
})
export class AtencionPresencialComponent implements OnInit {

  tecnicosList: Array<TecnicoDisponibilidad> = [];

  idIncidencia: number = 0;

  isTecnicosLoading: boolean = true;

  constructor(
    private incidenciasClienteService: IncidenciasClienteService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private location: Location,
  ) {
    this.idIncidencia = this.activatedRoute.snapshot.params['id'] as number;
  }

  ngOnInit(): void {
    this.obtenerTecnicosDisponibilidad();
  }

  obtenerTecnicosDisponibilidad() {
    this.isTecnicosLoading = true;
    this.incidenciasClienteService.listarTecnicosDisponibilidad().subscribe(
      {
        next: (res) => this.tecnicosList = res,
        error: (err) => {
          this.isTecnicosLoading = false;
          console.error(err);
        },
        complete: () => {
          this.isTecnicosLoading = false;
        }
      }
    )
  }

  onAsignarTecnico(idTecnico: number, nombre: string, apellido: string) {
    const nombreCompleto = `${nombre} ${apellido}`;
    this.alertService.confirmarAsignacionTecnicoIncidencia(nombre).subscribe(
      {
        next: (isConfirmed) => {
          if(isConfirmed) this.asignarTecnico(idTecnico);
        }
      }
    )
  }

  asignarTecnico(idTecnico: number) {
    this.incidenciasClienteService.asignarTecnicoIncidencia(this.idIncidencia, idTecnico).subscribe(
      {
        next: (res) => console.log(res),
        error: (err) => console.error(err),
        complete: () => {
          this.alertService.successAlertMessage("Técnico asignado", "Se actualizó el estado de la incidencia correctamente");
          this.location.back();
        }
      }
    )
  }

}
