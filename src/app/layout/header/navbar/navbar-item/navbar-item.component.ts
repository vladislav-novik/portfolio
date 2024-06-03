import { Component, inject, input } from '@angular/core';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [NgbNavItem],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {
  name = input('name');
}
