import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MapperService } from 'src/app/shared/services/mapper.service';
import { environment } from 'src/environments/environment';
import { ClienteLista } from '../model/cliente-lista.model';
import { ClienteListaResponseDto } from '../dto/clientes-list.response';
import { ClienteRequestDto } from '../dto/cliente.request';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string = environment.api_url + "/clientes"

  constructor(
    private httpClient: HttpClient,
    private mapperService: MapperService,
  ) { }

  listarClientes(): Observable<Array<ClienteLista>> {
    return this.httpClient.get<Array<ClienteListaResponseDto>>(`${this.baseUrl}/listar`).pipe(
      map(response => this.mapperService.mapToListaClientes(response))
    )
  }

  registrarCliente(clienteRequestDto: ClienteRequestDto): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/registrar`, clienteRequestDto);
  }
}
