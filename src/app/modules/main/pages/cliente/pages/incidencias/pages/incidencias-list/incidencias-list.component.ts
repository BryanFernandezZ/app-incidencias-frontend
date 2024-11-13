import { Component, OnInit } from '@angular/core';
import { INCIDENCIAS_ESTADOS } from 'src/app/shared/data/incidencias-estados.data';
import { Incidencia } from './incidencias-list.dummy';
import { Router } from '@angular/router';
import { IncidenciaService } from '../../services/incidencia.service';
import * as moment from 'moment';

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.css']
})
export class IncidenciasListComponent implements OnInit {

  estados = INCIDENCIAS_ESTADOS;
  incidencias: Array<Incidencia> = [];

  pendienteColor = INCIDENCIAS_ESTADOS.find(i => i.id === 3)!.color;
  atencionDomicilioColor = INCIDENCIAS_ESTADOS.find(i => i.id === 2)!.color;
  solucionadoColor = INCIDENCIAS_ESTADOS.find(i => i.id === 1)!.color;

  constructor(
    private router: Router,
    private incidenciaService: IncidenciaService,
  ) { }

  ngOnInit(): void {
    this.incidenciaService.listarIncidencias().subscribe(
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
}

