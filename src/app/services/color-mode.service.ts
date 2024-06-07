import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  private doc = inject(DOCUMENT);
  private colorMode: ColorMode = ColorMode.Light;

  constructor() {
    if (!this.doc) {
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

    this.colorMode = colorMode;
    this.addColorModeClass(this.colorMode);
  }

  private getSystemColorPrefers() {
    const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? ColorMode.Dark : ColorMode.Light;
    return systemColorMode;
  }
   
  private setSystemColorPrefers() {
    this.colorMode = ColorMode.System;
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
