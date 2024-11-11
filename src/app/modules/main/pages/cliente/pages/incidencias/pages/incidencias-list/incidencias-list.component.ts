import { Component, OnInit } from '@angular/core';
import { INCIDENCIAS_ESTADOS } from 'src/app/shared/data/incidencias-estados.data';
import { Incidencia, INCIDENCIAS_DATA } from './incidencias-list.dummy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.css']
})
export class IncidenciasListComponent implements OnInit {

  estados = INCIDENCIAS_ESTADOS;
  incidencias: Array<Incidencia> = INCIDENCIAS_DATA;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  onRegistrar() {
    this.router.navigate(['APP-INCIDENCIAS/cliente/incidencias/registrar']);
  }
}

