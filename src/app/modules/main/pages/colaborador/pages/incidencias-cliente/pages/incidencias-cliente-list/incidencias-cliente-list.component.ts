import { Component, OnInit } from '@angular/core';
import { INCIDENCIAS_ESTADOS } from 'src/app/shared/data/incidencias-estados.data';
import { IncidenciasClienteList } from '../../model/incidencias-cliente-list.model';
import { IncidenciasClienteService } from '../../services/incidencias-cliente.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidencias-cliente-list',
  templateUrl: './incidencias-cliente-list.component.html',
  styleUrls: ['./incidencias-cliente-list.component.css']
})
export class IncidenciasClienteListComponent implements OnInit {

  estados = INCIDENCIAS_ESTADOS;

  incidenciasList: Array<IncidenciasClienteList> = [];

  pendienteColor = INCIDENCIAS_ESTADOS.find(i => i.id === 3)!.color;
  atencionDomicilioColor = INCIDENCIAS_ESTADOS.find(i => i.id === 2)!.color;
  solucionadoColor = INCIDENCIAS_ESTADOS.find(i => i.id === 1)!.color;

  constructor(
    private incidenciasClientesService: IncidenciasClienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listarIncidencias();
  }

  listarIncidencias() {
    this.incidenciasClientesService.listarIncidencias().subscribe(
      {
        next: (res) => this.incidenciasList = res,
        error: (err) => console.error(err),
        complete: () => {
          this.incidenciasList = this.incidenciasList.map(item => {
            item.fechaRegistro = moment(item.fechaRegistro).format("DD MMM [del] YYYY hh:mm A");
            return item;
          });
        },
      }
    )
  }

  onAtenderIncidencia(idIncidencia: number) {
    this.router.navigate(['APP-INCIDENCIAS/colaborador/incidencias/atender', idIncidencia]);
  }

}
