import { Component, model } from '@angular/core';
import { firstTrigger, lastTrigger, middleTrigger } from './animations'

@Component({
  selector: 'app-hamburger',
  standalone: true,
  imports: [],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
  animations: [
    firstTrigger,
    middleTrigger,
    lastTrigger
  ],
})
export class HamburgerComponent {
  opened = model()
}
