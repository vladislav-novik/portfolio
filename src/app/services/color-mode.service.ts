import { Injectable, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  private colorMode = signal<ColorMode>(ColorMode.Light);
  private reverse = computed(() => this.colorMode() === ColorMode.Light ? ColorMode.Dark : ColorMode.Light);
  public isDark = computed(() => this.colorMode() === ColorMode.Dark);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    effect(() => this.addColorModeClass());
    
    const storedColorMode = localStorage.getItem('colorMode');

    const colorMode = storedColorMode as ColorMode || ColorMode.Light;
    this.colorMode.set(colorMode);
  }

  toggleColorMode() {
    localStorage.setItem('colorMode', this.reverse());
    this.colorMode.set(this.reverse());
  }

  private addColorModeClass() {
    document.documentElement.classList.remove(ColorMode.Light, ColorMode.Dark);
    document.documentElement.classList.add(this.colorMode());
  }
}

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}
