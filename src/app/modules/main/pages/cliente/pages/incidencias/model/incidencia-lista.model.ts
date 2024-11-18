export interface IncidenciaLista {
    idIncidencia: number,
    asunto: string,
    detalle: string,
    pendiente: boolean,
    presencial: boolean,
    solucionado: boolean,
    fechaRegistro: string,
    usuarioAsignado: number | null,
}