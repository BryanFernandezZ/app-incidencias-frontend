import { Component, OnInit } from '@angular/core';
import { INavbarData, NAVBAR_DATA } from './navbar-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarData = NAVBAR_DATA;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  onLogout() {
    this.router.navigate(['login']);
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.route) ? 'active' : '';
  }
}
