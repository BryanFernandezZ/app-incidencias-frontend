export interface DispositivoClienteResponseDto {
    id_dispositivo: number;
    nombre: string;
    ubicacion_referencial: string;
    id_contrato: number;
}

export interface DispositivoResponseDto {
    id_dispositivo: number;
    nombre: string;
    nombre_corto: string;
}