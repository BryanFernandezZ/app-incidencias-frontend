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
    },
    {
        route: 'colaborador/clientes',
        label: 'Clientes',
        role: Rol.ADMIN,
    },
    {
        route: 'colaborador/incidencias',
        label: 'Incidencias',
        role: Rol.ADMIN,
    }
]

export interface INavbarData {
    route: string;
    label: string;
    role?: Rol;
}