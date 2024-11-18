import { Injectable } from '@angular/core';
import { IncidenciaResponseDto } from 'src/app/modules/main/pages/cliente/pages/incidencias/dto/incidencia.response';
import { IncidenciaLista } from 'src/app/modules/main/pages/cliente/pages/incidencias/model/incidencia-lista.model';
import { DispositivoClienteResponseDto } from '../dto/dispositivo.response';
import { DispositivoCliente } from '../model/dispositivo-cliente.model';
import { Incidencia } from 'src/app/modules/main/pages/cliente/pages/incidencias/model/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }

  mapToListaIncidencias(incidenciasResponse: Array<IncidenciaResponseDto>): Array<IncidenciaLista> {
    return incidenciasResponse.map(item => (
      {
        idIncidencia: item.id_incidencia,
        asunto: item.asunto,
        detalle: item.detalle,
        pendiente: item.pendiente,
        presencial: item.presencial,
        solucionado: item.solucionado,
        fechaRegistro: item.fecha_registro,
        usuarioAsignado: item.usuario_asignado,
      }
    ))
  }

  mapToListaDispositivosCliente(dispositivosClienteResponse: Array<DispositivoClienteResponseDto>): Array<DispositivoCliente> {
    return dispositivosClienteResponse.map(item => (
      {
        idDispositivo: item.id_dispositivo,
        nombre: item.nombre,
        ubicacionReferencial: item.ubicacion_referencial,
        idContrato: item.id_contrato,
      }
    ))
  }

  mapToObtenerIncidenciaPorId(incidenciaResponseDto: IncidenciaResponseDto | null): Incidencia | null {
    if(incidenciaResponseDto !== null) {
      return {
        idIncidencia: incidenciaResponseDto.id_incidencia,
        asunto: incidenciaResponseDto.asunto,
        calificacion: incidenciaResponseDto.calificacion,
        detalle: incidenciaResponseDto.detalle,
        imagen: incidenciaResponseDto.imagen,
        fechaRegistro: incidenciaResponseDto.fecha_registro,
        pendiente: incidenciaResponseDto.pendiente,
        presencial: incidenciaResponseDto.presencial,
        solucionado: incidenciaResponseDto.solucionado,
        usuarioAsignado: incidenciaResponseDto.usuario_asignado,
        idContrato: incidenciaResponseDto.id_contrato,
      }
    }
    return null;
  }
}
