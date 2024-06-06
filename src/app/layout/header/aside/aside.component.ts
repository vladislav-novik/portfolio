import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations'
import { Component, model } from '@angular/core';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component'

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [MobileNavbarComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
  animations: [
    trigger('asideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate("300ms 100ms ease-out", style({ transform: 'translateX(0)' })),
        query("@*", stagger(100, animateChild()))
      ]),
      transition(':leave', [
        query("@*", stagger(50, animateChild())),
        animate("200ms 50ms ease-out", style({  transform: 'translateX(100%)' }))])
    ]),
  ],
})
export class AsideComponent {
  opened = model();

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
