import { Rol } from "../../data/role.enum";

export const NAVBAR_DATA: Array<INavbarData> = [
    {
        route: 'inicio',
        label: 'Inicio',
    },
    {
        route: 'cliente/incidencias',
        label: 'Mis incidencias',
        role: Rol.COMUN,
    }
]

export interface INavbarData {
    route: string;
    label: string;
    role?: Rol;
}