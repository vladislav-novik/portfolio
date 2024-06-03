import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
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
    name: 'Home',
    route: '/home',
  }, {
    name: 'About',
    route: '/about'
  }, {
    name: 'Projects',
    route: '/projects'
  }, {
    name: 'Contact',
    route: '/contact'
  }]
}
