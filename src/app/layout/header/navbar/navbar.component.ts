import { Component, inject } from '@angular/core';
import { NgbNav, NgbNavItem } from '@ng-bootstrap/ng-bootstrap'
import { NavbarItemComponent } from './navbar-item/navbar-item.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNav, NgbNavItem, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarItems = [{
    name: 'Header.Item1',
    route: '/home',
  }, {
    name: 'Header.Item2',
    route: '/about'
  }, {
    name: 'Header.Item3',
    route: '/projects'
  }, {
    name: 'Header.Item4',
    route: '/contact'
  }]
}
