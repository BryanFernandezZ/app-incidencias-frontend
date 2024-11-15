import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IncidenciaRequesDto } from '../dto/incidencia.request';
import { Incidencia } from '../pages/incidencias-list/incidencias-list.dummy';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  private basUrl = `${environment.api_url}`

  constructor(private httpClient: HttpClient) { }

  createIncidencia(incidenciaRequesDto: IncidenciaRequesDto, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append("incidencia", JSON.stringify(incidenciaRequesDto));
    formData.append("imagen", imagen);
    return this.httpClient.post<any>(`${this.basUrl}/app/guardarIndicenia`, formData);
  }

  listarIncidencias(): Observable<Array<Incidencia>> {
    return this.httpClient.get<any>(`${this.basUrl}/app/ListarIncidencia`);
  }

}
