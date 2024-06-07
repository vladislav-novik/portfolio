import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {
  name = input.required<string>();
  index = input.required<number>();
}
