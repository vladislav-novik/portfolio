import { Component, input } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  title = input.required<string>();
}
