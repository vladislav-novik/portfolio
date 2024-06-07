import { TestBed } from '@angular/core/testing';
import { ColorMode, ColorModeService } from './color-mode.service';

describe('ColorModeService', () => {
  let service: ColorModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with light mode if no color mode is stored', () => {
    localStorage.removeItem('colorMode');
    service = new ColorModeService();
    expect(service.colorMode).toEqual(ColorMode.Light);
  });

  it('should initialize with stored color mode', () => {
    localStorage.setItem('colorMode', ColorMode.Dark);
    service = new ColorModeService();
    expect(service.colorMode).toEqual(ColorMode.Dark);
  });

  it('should toggle color mode', () => {
    service.colorMode = ColorMode.Light;
    service.toggleColorMode();
    expect(service.colorMode).toEqual(ColorMode.Dark);
    service.toggleColorMode();
    expect(service.colorMode).toEqual(ColorMode.Light);
  });

  it('should store color mode', () => {
    service.colorMode = ColorMode.Light;
    service.toggleColorMode();
    expect(localStorage.getItem('colorMode')).toEqual(ColorMode.Dark);
    service.toggleColorMode();
    expect(localStorage.getItem('colorMode')).toEqual(ColorMode.Light);
  });

  it('should set data-bs-theme attribute', () => {
    service.colorMode = ColorMode.Light;
    service.toggleColorMode();
    expect(document.documentElement.getAttribute('data-bs-theme')).toEqual(ColorMode.Light);
    service.colorMode = ColorMode.Dark;
    service.toggleColorMode();
    expect(document.documentElement.getAttribute('data-bs-theme')).toEqual(ColorMode.Dark);
  });
});
