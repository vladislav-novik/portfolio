import { Component, signal } from '@angular/core';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [TranslateModule, NgbNav, NgbNavItem, NgbNavLink, NgbNavContent, NgbNavOutlet],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  active = signal(0);
}
