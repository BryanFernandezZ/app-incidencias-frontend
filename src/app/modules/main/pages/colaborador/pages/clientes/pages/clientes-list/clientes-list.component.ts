import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { ClienteLista } from '../../model/cliente-lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientesList: Array<ClienteLista> = [];

  constructor(
    private router: Router,
    private clienteService: ClientesService,
  ) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.listarClientes().subscribe(
      {
        next: (res) => this.clientesList = res,
        error: (err) => console.error(err),
        complete: () => {},
      }
    )
  }

  onRegistrar() {
    this.router.navigate(['APP-INCIDENCIAS/colaborador/clientes/registrar']);
  }

  onVerDispositivos(clienteId: number, nombre: string, apellido: string) {
    this.router.navigate(
      ['APP-INCIDENCIAS/colaborador/clientes/dispositivos'],
      { queryParams: { id: clienteId, cliente: `${nombre} ${apellido}` } }
    );
  }

}
