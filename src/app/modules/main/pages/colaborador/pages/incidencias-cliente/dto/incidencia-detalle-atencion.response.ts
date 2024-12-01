export interface IncidenciaDetalleAtencionResponseDto {
    id_incidencia: number;
    solicitante: string;
    dispositivo: string;
    detalle: string;
    imagen: string;
    presencial: boolean;
    solucionado: boolean;
}