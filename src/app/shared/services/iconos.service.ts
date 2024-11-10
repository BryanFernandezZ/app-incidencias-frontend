import { Injectable } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Icons } from "../../../assets/svg/Icons";

@Injectable({
  providedIn: 'root'
})
export class IconosService {

  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) { }

  globalIcons(): void {
    this.loadSVG(Icons, 'assets/svg');
  }
  private loadSVG(icons: typeof Icons, url: string): void {
    Object.keys(icons).forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/${icon}.svg`)
      );
    });
  }
}
