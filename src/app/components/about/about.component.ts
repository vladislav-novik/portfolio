import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { SectionTitleComponent } from '../section-title/section-title.component'
import { SkillListComponent } from '../skill-list/skill-list.component'
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, SectionTitleComponent, SkillListComponent, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
