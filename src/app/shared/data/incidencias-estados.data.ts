export const INCIDENCIAS_ESTADOS: Array<IncidenciaEstado> = [
    {
        id: 1,
        color: "#3aeb89",
        estado: "Solucionado"
    },
    {
        id: 2,
        color: "#dbdd47",
        estado: "Atencion a domicilio"
    },
    {
        id: 3,
        color: "#5a5a5a",
        estado: "Pendiente"
    },
];

export interface IncidenciaEstado {
    id: number;
    color: string;
    estado: string;
}