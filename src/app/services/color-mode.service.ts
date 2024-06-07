import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  private doc = inject(DOCUMENT);
  private colorMode: ColorMode = ColorMode.Light;

  constructor() {
    if (!this.doc.defaultView?.localStorage) {
      // this.addColorModeBSAttribute();
      return;
    }

    const storedColorMode = localStorage.getItem('colorMode');
    if (storedColorMode) {
      this.colorMode = storedColorMode as ColorMode;
    }
    this.addColorModeBSAttribute();
  }

  toggleColorMode() {
    this.colorMode = this.colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light;
    localStorage.setItem('colorMode', this.colorMode);
    this.addColorModeBSAttribute();
  }

  private addColorModeBSAttribute() {
    document.documentElement.setAttribute('data-bs-theme', this.colorMode);
  }
}

export enum ColorMode {
  Light = 'light',
  Dark = 'dark'
}
