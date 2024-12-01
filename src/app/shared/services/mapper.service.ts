import { Injectable } from '@angular/core';
import { IncidenciaResponseDto } from 'src/app/modules/main/pages/cliente/pages/incidencias/dto/incidencia.response';
import { IncidenciaLista } from 'src/app/modules/main/pages/cliente/pages/incidencias/model/incidencia-lista.model';
import { DispositivoClienteResponseDto, DispositivoResponseDto } from '../dto/dispositivo.response';
import { DispositivoCliente } from '../model/dispositivo-cliente.model';
import { Incidencia } from 'src/app/modules/main/pages/cliente/pages/incidencias/model/incidencia.model';
import { ClienteListaResponseDto } from 'src/app/modules/main/pages/colaborador/pages/clientes/dto/clientes-list.response';
import { ClienteLista } from 'src/app/modules/main/pages/colaborador/pages/clientes/model/cliente-lista.model';
import { IncidenciasClienteList } from 'src/app/modules/main/pages/colaborador/pages/incidencias-cliente/model/incidencias-cliente-list.model';
import { IncidenciasClienteListResponseDto } from 'src/app/modules/main/pages/colaborador/pages/incidencias-cliente/dto/incidencias-cliente-list.response';
import { IncidenciaDetalleAtencionResponseDto } from 'src/app/modules/main/pages/colaborador/pages/incidencias-cliente/dto/incidencia-detalle-atencion.response';
import { IncidenciaDetalleAtencion } from 'src/app/modules/main/pages/colaborador/pages/incidencias-cliente/model/incidencia-detalle-atencion.model';
import { Dispositivo } from '../model/dispositivo.model';

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

  mapToListaClientes(response: ClienteListaResponseDto[]): Array<ClienteLista> {
    return response.map(item => (
      {
        idCliente: item.id_cliente,
        nombre: item.nombre,
        apellido: item.apellido,
      }
    ))
  }

  mapToListaIncidenciasClientes(incidencias: Array<IncidenciasClienteListResponseDto>): Array<IncidenciasClienteList> {
    return incidencias.map(item => (
      {
        idIncidencia: item.id_incidencia,
        asunto: item.asunto,
        detalle: item.detalle,
        cliente: item.cliente,
        pendiente: item.pendiente,
        presencial: item.presencial,
        solucionado: item.solucionado,
        fechaRegistro: item.fecha_registro,
        usuarioAsignado: item.usuario_asignado,
      }
    ))
  }

  mapToDetalleIncidenciaAtender(response: IncidenciaDetalleAtencionResponseDto | undefined): IncidenciaDetalleAtencion | null {
    if(response) {
      return {
        idIncidencia: response.id_incidencia,
        solicitante: response.solicitante,
        dispositivo: response.dispositivo,
        detalle: response.detalle,
        imagen: response.imagen,
        presencial: response.presencial,
        solucionado: response.solucionado,
      }
    }
    return null;
  }

  mapToListaDispositivos(dispositivos: Array<DispositivoResponseDto>): Array<Dispositivo> {
    return dispositivos.map(item => (
      {
        idDispositivo: item.id_dispositivo,
        nombre: item.nombre,
        nombreCorto: item.nombre_corto,
      }
    ))
  }
}
