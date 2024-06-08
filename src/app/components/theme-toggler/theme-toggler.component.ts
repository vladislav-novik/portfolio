import { Component, computed, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component'
import { ColorMode, ColorModeService } from '../../services/color-mode.service'
import { sun, moon } from '../../data/icon';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {
  colorModeService = inject(ColorModeService);
  ColorMode = ColorMode;
  icon = computed(() => this.colorModeService.isDark() ? moon : sun);
}
