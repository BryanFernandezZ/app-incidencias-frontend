import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoCliente } from 'src/app/shared/model/dispositivo-cliente.model';
import { DispositivoService } from 'src/app/shared/services/dispositivo.service';

@Component({
  selector: 'app-dispositivos-cliente',
  templateUrl: './dispositivos-cliente.component.html',
  styleUrls: ['./dispositivos-cliente.component.css']
})
export class DispositivosClienteComponent implements OnInit {

  clienteId: number = 0;
  nombreCliente: string = "";

  dispositivos: Array<DispositivoCliente> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivoService: DispositivoService,
  ) {
    this.clienteId = this.activatedRoute.snapshot.queryParams['id'] as number;
    this.nombreCliente = this.activatedRoute.snapshot.queryParams['cliente'] as string;
  }

  ngOnInit(): void {
    this.obtenerDispositivosCliente();
  }

  obtenerDispositivosCliente() {
    this.dispositivoService.getDevicesByClientId(this.clienteId).subscribe(
      {
        next: (res) => this.dispositivos = res,
        error: (err) => console.error(err),
        complete: () => {}
      }
    )
  }

}
