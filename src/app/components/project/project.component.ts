import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslateModule, CarouselModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: false,
  }

  even = input.required<boolean>();
  project = input.required<Project>();
}

type Project = {
  Title: string;
  Description: string;
  images: string[];
  Technologies: string[];
}
