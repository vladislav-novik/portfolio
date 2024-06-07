import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  active = signal(0);
}
