import { Component, OnInit } from '@angular/core';
import { INCIDENCIAS_ESTADOS } from 'src/app/shared/data/incidencias-estados.data';
import { Router } from '@angular/router';
import { IncidenciaService } from '../../services/incidencia.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IncidenciaLista } from '../../model/incidencia-lista.model';
import * as moment from 'moment';

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.css']
})
export class IncidenciasListComponent implements OnInit {

  estados = INCIDENCIAS_ESTADOS;
  incidencias: Array<IncidenciaLista> = [];

  pendienteColor = INCIDENCIAS_ESTADOS.find(i => i.id === 3)!.color;
  atencionDomicilioColor = INCIDENCIAS_ESTADOS.find(i => i.id === 2)!.color;
  solucionadoColor = INCIDENCIAS_ESTADOS.find(i => i.id === 1)!.color;

  constructor(
    private router: Router,
    private incidenciaService: IncidenciaService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.incidenciaService.listarIncidencias(this.authService.getUserSession().cliente!.idCliente).subscribe(
      {
        next: (res) => this.incidencias = res,
        error: (err) => console.error(err),
        complete: () => {
          this.incidencias = this.incidencias.map(item => {
            item.fechaRegistro = moment(item.fechaRegistro).format("DD MMM [del] YYYY hh:mm A");
            return item;
          });
        },
      }
    )
  }


  onRegistrar() {
    this.router.navigate(['APP-INCIDENCIAS/cliente/incidencias/registrar']);
  }

  onUpdateIncidencia(idIncidencia: number) {
    this.router.navigate(['APP-INCIDENCIAS/cliente/incidencias/editar', idIncidencia]);
  }
}

