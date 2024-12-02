import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MapperService } from 'src/app/shared/services/mapper.service';
import { environment } from 'src/environments/environment';
import { IncidenciasClienteList } from '../model/incidencias-cliente-list.model';
import { IncidenciasClienteListResponseDto } from '../dto/incidencias-cliente-list.response';
import { IncidenciaDetalleAtencionResponseDto } from '../dto/incidencia-detalle-atencion.response';
import { IncidenciaDetalleAtencion } from '../model/incidencia-detalle-atencion.model';
import { ActualizarEstadoIncidenciaRequestDto } from '../dto/actualizar-estado-incidencia.request';
import { TecnicoDisponibilidad } from '../model/tecnico-disponibilidad.model';
import { TecnicoDisponibilidadResponseDto } from '../dto/tecnico-disponibilidad.response';
import { AsignarTecnicoIncidenciaRequestDto } from '../dto/asignar-tecnico-incidencia.request';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasClienteService {

  private baseUrl = environment.api_url + "/incidencias"

  constructor(
    private httpClient: HttpClient,
    private mapperService: MapperService,
  ) { }

  listarIncidencias(): Observable<Array<IncidenciasClienteList>> {
    return this.httpClient.get<Array<IncidenciasClienteListResponseDto>>(`${this.baseUrl}/listar`).pipe(
      map(response => this.mapperService.mapToListaIncidenciasClientes(response))
    );
  }

  obtenerDetalleIncidenciaAtencion(idIncidencia: number): Observable<IncidenciaDetalleAtencion | null> {
    return this.httpClient.get<IncidenciaDetalleAtencionResponseDto>(`${this.baseUrl}/atencion/obtener/${idIncidencia}`).pipe(
      map(response => this.mapperService.mapToDetalleIncidenciaAtender(response)),
    );
  }

  actualizarEstadoIncidencia(idIncidencia: number, idEstado: number): Observable<any> {
    const actualizarEstadoIncidenciaRequestDto: ActualizarEstadoIncidenciaRequestDto = {
      idIncidencia: idIncidencia,
      idEstado: idEstado,
    }
    return this.httpClient.put<any>(`${this.baseUrl}/atencion/actualizar-estado`, actualizarEstadoIncidenciaRequestDto);
  }

  listarTecnicosDisponibilidad(): Observable<Array<TecnicoDisponibilidad>> {
    return this.httpClient.get<Array<TecnicoDisponibilidadResponseDto>>(`${this.baseUrl}/tecnicos`).pipe(
      map(response => this.mapperService.mapToListaTecnicosDisponibilidad(response)),
    )
  }

  asignarTecnicoIncidencia(idIncidencia: number, idTecnico: number): Observable<any> {
    const asignarTecnicoIncidencia: AsignarTecnicoIncidenciaRequestDto = {
      idIncidencia: idIncidencia, idTecnico: idTecnico,
    };
    return this.httpClient.post<any>(`${this.baseUrl}/tecnicos/asignar`, asignarTecnicoIncidencia);
  }

}
