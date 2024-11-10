export interface UserSession {
    idCuenta: number;
    nombreUsuario: string;
    rol: RolUserSession;
    usuario?: UsuarioUserSession;
    cliente?: ClienteUserSession;
}

export interface RolUserSession {
    idRol: number;
    nombre: string;
}

export interface UsuarioUserSession {
    idUsuario: number;
    nombre: string;
}

export interface ClienteUserSession {
    idCliente: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
}