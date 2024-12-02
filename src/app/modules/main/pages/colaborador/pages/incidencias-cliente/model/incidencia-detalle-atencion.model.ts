export interface IncidenciaDetalleAtencion {
    idIncidencia: number;
    solicitante: string;
    dispositivo: string;
    detalle: string;
    imagen: string;
    telefono: string;
    presencial: boolean;
    solucionado: boolean;
}