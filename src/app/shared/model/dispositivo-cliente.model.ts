export interface DispositivoCliente {
    idDispositivo: number;
    nombre: string;
    contrato: ContratoDispositivo;
}

export interface ContratoDispositivo {
    idContrato: number;
}
