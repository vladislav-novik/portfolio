import { Component, HostListener, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { trigger, style, query, transition, stagger, animate } from '@angular/animations'
// import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
// import { TranslateService } from '@ngx-translate/core';
import { UntypedFormControl } from '@angular/forms'
import { NavbarComponent } from './navbar/navbar.component'
import { AsideComponent } from './aside/aside.component'
import { HamburgerComponent } from './hamburger/hamburger.component'
import { ThemeTogglerComponent } from '../../components/theme-toggler/theme-toggler.component'
// import { LanguageService } from 'src/app/services/language/language.service';


@Component({
  standalone: true,
  imports: [RouterLink, NavbarComponent, HamburgerComponent, AsideComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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

export class HeaderComponent {
  asideOpened = signal(false)
  scrollY = 0;
  languageFormControl = new UntypedFormControl();
  cvName = "";
  router = inject(Router);

  // ngOnInit(): void {
    // this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val))
    // this.languageFormControl.setValue(this.languageService.language)
  // }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition() {
    this.scrollY = window.scrollY
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language)
  }
}
