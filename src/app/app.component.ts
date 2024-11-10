import { Component } from '@angular/core';
import { IconosService } from './shared/services/iconos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private iconService: IconosService) {
    this.iconService.globalIcons();
  }

}
