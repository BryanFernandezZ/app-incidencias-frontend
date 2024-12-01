export interface IncidenciasClienteList {
    idIncidencia: number;
    asunto: string;
    detalle: string;
    cliente: string;
    pendiente: boolean;
    presencial: boolean;
    solucionado: boolean;
    fechaRegistro: string;
    usuarioAsignado: number| null;
}