import { Component, OnInit } from '@angular/core';
import { INavbarData, NAVBAR_DATA } from './navbar-data';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Rol } from '../../data/role.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarData = NAVBAR_DATA;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.clearUserSession();
    this.router.navigate(['login']);
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.route) ? 'active' : '';
  }

  checkRole(rol: Rol): boolean {
    const rolUsuario = this.authService.getUserSession().rol;
    return rolUsuario.nombre.toUpperCase() === rol;
  }
}
