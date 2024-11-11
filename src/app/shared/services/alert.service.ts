import { Injectable } from '@angular/core';
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
}
