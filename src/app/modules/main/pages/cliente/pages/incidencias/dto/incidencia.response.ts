export interface IncidenciaResponseDto {
    id_incidencia: number;
    asunto: string;
    calificacion: number | null;
    detalle: string;
    imagen: string;
    fecha_registro: string;
    pendiente: boolean;
    presencial: boolean;
    solucionado: boolean;
    usuario_asignado: number | null;
    id_contrato: number;
}