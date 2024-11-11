export const NAVBAR_DATA: Array<INavbarData> = [
    {
        route: 'inicio',
        label: 'Inicio'
    },
    {
        route: 'cliente/incidencias',
        label: 'Mis incidencias'
    }
]

export interface INavbarData {
    route: string;
    label: string;
}