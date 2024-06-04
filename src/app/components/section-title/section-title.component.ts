import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  index = input.required<number>();
  title = input.required<string>();
}
