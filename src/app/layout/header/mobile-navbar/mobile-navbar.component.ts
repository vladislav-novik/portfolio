import { animate, style, transition, trigger } from '@angular/animations'
import { Component } from '@angular/core';
import { ThemeTogglerComponent } from '../../../components/theme-toggler/theme-toggler.component'

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [ThemeTogglerComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(75%)' }),
        animate("300ms ease-out", style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [animate("100ms ease-in", style({ opacity: 0, transform: 'translateX(75%)' }))])
    ])
  ],
})
export class MobileNavbarComponent {
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
