import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DispositivoCliente } from '../model/dispositivo-cliente.model';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  private baseUrl = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  getDevicesByClientId(clientId: number): Observable<Array<DispositivoCliente>> {
    return this.httpClient.get<any>(`${this.baseUrl}/app/dispositivos/cliente/${clientId}`);
  }
}
