import { Component, inject } from '@angular/core';
import { NavbarItemComponent } from './navbar-item/navbar-item.component'
import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { ColorMode, ColorModeService } from '../../../services/color-mode.service'
import { ThemeTogglerComponent } from '../../../components/theme-toggler/theme-toggler.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarItemComponent, ThemeTogglerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ]
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

  ColorMode = ColorMode;

  colorModeService = inject(ColorModeService)
}
