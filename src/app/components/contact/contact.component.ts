import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
