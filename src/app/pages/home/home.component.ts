import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component'
import { AboutComponent } from '../../components/about/about.component'
import { JobsComponent } from '../../components/jobs/jobs.component'
import { ProjectsComponent } from '../../components/projects/projects.component'
import { ContactComponent } from '../../components/contact/contact.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, JobsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
