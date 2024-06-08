import { Component, input } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  index = input.required<number>();
  title = input.required<string>();
}
