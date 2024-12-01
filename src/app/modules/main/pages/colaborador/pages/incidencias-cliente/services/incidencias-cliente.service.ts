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

}
