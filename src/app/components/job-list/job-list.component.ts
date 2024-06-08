import { animate, style, transition, trigger } from '@angular/animations'
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [TranslateModule, ScrollAnimationDirective],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
  animations: [
    trigger('jobListTrigger', [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("350ms ease-in-out", style({ opacity: 1 }))
      ]),
    ],
  )]
})
export class JobListComponent {
  active = signal(0);
}
