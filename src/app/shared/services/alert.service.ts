import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlertMessage(title: string, message: string) {
    Swal.fire(
      {
        title: title,
        text: message,
        showConfirmButton: true,
      }
    )
  }

  confirmarActualizarEstadoIncidencia(estado: string): Observable<boolean> {
    return from(
      Swal.fire({
        title: 'Confirmación',
        text: `Está a punto de cambiar el estado de la incidencia a "${estado}". ¿Desea continuar?`,
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        showCancelButton: true,
        cancelButtonText: 'No',
      }).then((result) => result.isConfirmed)
    );
  }
}
