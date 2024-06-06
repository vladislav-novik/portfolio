import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { SectionTitleComponent } from '../section-title/section-title.component'
import { ProjectComponent } from '../project/project.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, SectionTitleComponent, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
}
