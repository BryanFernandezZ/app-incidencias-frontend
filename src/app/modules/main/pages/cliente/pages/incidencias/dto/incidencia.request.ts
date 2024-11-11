export interface IncidenciaRequesDto {
    asunto: string;
    detalle: string;
    calificacion: number;
    pendiente: boolean;
    presencial: boolean;
    solucionado: boolean;
    usuarioAsignado: number | null;
    cliente: ClienteIncidenciaRequestDto;
    contrato: ContratoIncidenciaRequestDto;
}

export interface ClienteIncidenciaRequestDto {
    idCliente: number;
}

export interface ContratoIncidenciaRequestDto {
    idContrato: number;
}