import { Component, OnInit, HostListener, inject } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { trigger, style, query, transition, stagger, animate } from '@angular/animations'
import { NgbNav, NgbNavItem } from '@ng-bootstrap/ng-bootstrap'
// import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
// import { TranslateService } from '@ngx-translate/core';
import { UntypedFormControl } from '@angular/forms'
import { NgStyle } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
// import { LanguageService } from 'src/app/services/language/language.service';


@Component({
  standalone: true,
  imports: [RouterLink, NavbarComponent, NgbNav, NgbNavItem, NgStyle],
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

export class HeaderComponent implements OnInit {
  responsiveMenuVisible = false;
  scrollY = 0;
  languageFormControl = new UntypedFormControl();
  cvName = "";
  router = inject(Router);

  ngOnInit(): void {
    // this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val))
    // this.languageFormControl.setValue(this.languageService.language)
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event: Event) {
    this.scrollY = window.scrollY
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language)
  }
}
