import { Component, OnInit } from '@angular/core';
import { IncidenciaRequesDto } from '../../dto/incidencia.request';
import { IncidenciaService } from '../../services/incidencia.service';

@Component({
  selector: 'app-incidencias-new',
  templateUrl: './incidencias-new.component.html',
  styleUrls: ['./incidencias-new.component.css']
})
export class IncidenciasNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
