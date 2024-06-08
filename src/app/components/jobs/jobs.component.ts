import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { SectionTitleComponent } from '../section-title/section-title.component'
import { JobListComponent } from '../job-list/job-list.component'

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [TranslateModule, SectionTitleComponent, JobListComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  
}
