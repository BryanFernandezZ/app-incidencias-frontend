export const NAVBAR_DATA: Array<INavbarData> = [
    {
        route: 'inicio',
        label: 'Inicio'
    },
    {
        route: 'incidencias',
        label: 'Mis incidencias'
    }
]

export interface INavbarData {
    route: string;
    label: string;
}