import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DispositivoCliente } from '../model/dispositivo-cliente.model';
import { DispositivoClienteResponseDto } from '../dto/dispositivo.response';
import { MapperService } from './mapper.service';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  private baseUrl = environment.api_url + "/dispositivos";

  constructor(
    private httpClient: HttpClient,
    private mapperService: MapperService,
  ) { }

  getDevicesByClientId(clientId: number): Observable<Array<DispositivoCliente>> {
    return this.httpClient.get<Array<DispositivoClienteResponseDto>>(`${this.baseUrl}/cliente/${clientId}`).pipe(
    map(response => this.mapperService.mapToListaDispositivosCliente(response)),
    );
  }
}
