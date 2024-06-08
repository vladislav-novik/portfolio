import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  private colorMode = signal<ColorMode>(ColorMode.Light);
  public isDark = computed(() => this.colorMode() === ColorMode.Dark);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const storedColorMode = localStorage.getItem('colorMode');
    if (storedColorMode) {
      this.setColorMode(storedColorMode as ColorMode);
      return;
    }

    this.setSystemColorPrefers();
  }

  setColorMode(colorMode: ColorMode) {
    localStorage.setItem('colorMode', colorMode);

    if (colorMode === ColorMode.System) {
      this.setSystemColorPrefers();
      return;
    }

    this.colorMode.set(colorMode);
    this.addColorModeClass(colorMode);
  }

  private getSystemColorPrefers() {
    const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? ColorMode.Dark : ColorMode.Light;
    return systemColorMode;
  }
   
  private setSystemColorPrefers() {
    this.colorMode.set(ColorMode.System);
    const systemColorMode = this.getSystemColorPrefers();
    this.addColorModeClass(systemColorMode);
  }

  private addColorModeClass(colorMode: ColorMode) {
    document.documentElement.classList.remove(ColorMode.Light, ColorMode.Dark);
    document.documentElement.classList.add(colorMode);
  }
}

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}
