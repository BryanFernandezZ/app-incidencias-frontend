import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DispositivoCliente } from '../model/dispositivo-cliente.model';
import { DispositivoClienteResponseDto, DispositivoResponseDto } from '../dto/dispositivo.response';
import { MapperService } from './mapper.service';
import { Dispositivo } from '../model/dispositivo.model';
import { VincularDispositivoRequestDto } from 'src/app/modules/main/pages/colaborador/pages/clientes/dto/vincular-dispositivo.request';

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

  listarDispositivos(nombre?: string): Observable<Array<Dispositivo>> {
    let queryParam = new HttpParams();
    if(nombre !== undefined && nombre !== null) queryParam = new HttpParams().append('nombre', nombre!!);
    return this.httpClient.get<Array<DispositivoResponseDto>>(`${this.baseUrl}/listar`, { params: queryParam }).pipe(
      map(response => this.mapperService.mapToListaDispositivos(response)),
    )
  }

  vincularDispositivo(idCliente: number, idDispositivo: number, ubicacionReferencial: string) {
    const vincularDispositivoRequestDto: VincularDispositivoRequestDto = {
      idCliente: idCliente, idDispositivo: idDispositivo, ubicacionReferencial: ubicacionReferencial
    }
    return this.httpClient.post<any>(`${this.baseUrl}/cliente/vincular`, vincularDispositivoRequestDto);
  }
}
