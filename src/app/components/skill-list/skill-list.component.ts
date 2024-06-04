import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component'

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent {
  skills = ['Angular', 'RxJS', 'TypeScript', 'HTML', 'CSS', 'Sass', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL'];
}
