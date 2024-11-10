export const INCIDENCIAS_ESTADOS: Array<IncidenciaEstado> = [
    {
        color: "#3aeb89",
        estado: "Solucionado"
    },
    {
        color: "#dbdd47",
        estado: "Atencion a domicilio"
    },
    {
        color: "#5a5a5a",
        estado: "Pendiente"
    },
];

export interface IncidenciaEstado {
    color: string;
    estado: string;
}