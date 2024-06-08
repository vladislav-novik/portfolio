import { Component, Signal, ViewEncapsulation, input } from '@angular/core';
import { NgClass } from '@angular/common'

@Component({
  selector: 'app-icon',
  imports: [NgClass],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  path = input<string | Signal<string>>();
  size = input<number>(30);
  color = input<string>('');
  viewBox = input<string>('0 0 24 24');
  iconClass = input<string>('');
}
