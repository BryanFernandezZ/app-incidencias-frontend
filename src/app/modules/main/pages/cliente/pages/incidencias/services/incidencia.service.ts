import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IncidenciaRequesDto } from '../dto/incidencia.request';
import { IncidenciaResponseDto } from '../dto/incidencia.response';
import { IncidenciaLista } from '../model/incidencia-lista.model';
import { MapperService } from 'src/app/shared/services/mapper.service';
import { Incidencia } from '../model/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  private basUrl = `${environment.api_url}/incidencias`

  constructor(
    private httpClient: HttpClient,
    private mapperService: MapperService,
  ) { }

  createIncidencia(incidenciaRequesDto: IncidenciaRequesDto, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append("incidencia", JSON.stringify(incidenciaRequesDto));
    formData.append("imagen", imagen);
    return this.httpClient.post<any>(`${this.basUrl}/registrar`, formData);
  }

  listarIncidencias(idCliente: number): Observable<Array<IncidenciaLista>> {
    return this.httpClient.get<Array<IncidenciaResponseDto>>(`${this.basUrl}/cliente/${idCliente}`).pipe(
      map(response => this.mapperService.mapToListaIncidencias(response)),
    );
  }

  obtenerIncidencia(incidenciaId: number): Observable<Incidencia | null> {
    return this.httpClient.get<IncidenciaResponseDto | null>(`${this.basUrl}/obtener/${incidenciaId}`).pipe(
      map(response => this.mapperService.mapToObtenerIncidenciaPorId(response)),
    );
  }

}
