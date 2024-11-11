import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContratoClienteDispositivo } from '../model/contrato-dispositivo.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private baseUrl = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  getContratosByClient(idCliente: number): Observable<Array<ContratoClienteDispositivo>> {
    return this.httpClient.get<any>(`${this.baseUrl}/app/contratos/dispositivos/cliente/${idCliente}`);
  }
}
