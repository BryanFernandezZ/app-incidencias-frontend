export interface Incidencia {
    idIncidencia: number;
    asunto: string;
    calificacion: number | null;
    detalle: string;
    imagen: string;
    fechaRegistro: string;
    pendiente: boolean;
    presencial: boolean;
    solucionado: boolean;
    usuarioAsignado: number | null;
    idContrato: number;
}
