import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { TranslateService } from '@ngx-translate/core'
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  translate = inject(TranslateService);
  platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
  }
}
