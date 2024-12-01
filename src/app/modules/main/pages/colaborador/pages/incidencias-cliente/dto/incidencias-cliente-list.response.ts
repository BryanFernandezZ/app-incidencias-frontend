export interface IncidenciasClienteListResponseDto {
    id_incidencia: number;
    asunto: string;
    detalle: string;
    cliente: string;
    pendiente: boolean;
    presencial: boolean;
    solucionado: boolean;
    fecha_registro: string;
    usuario_asignado: number| null;
}