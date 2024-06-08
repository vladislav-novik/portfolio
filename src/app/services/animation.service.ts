import { isPlatformBrowser } from '@angular/common'
import { PLATFORM_ID } from '@angular/core';
import { Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() {
    // if (isPlatformBrowser(PLATFORM_ID)) {
    //   gsap.registerPlugin(ScrollTrigger);
    // }
    gsap.registerPlugin(ScrollTrigger);
  }

  fadeUp(el: HTMLElement) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'bottom bottom',
      },
    });

    tl
      .from(el, {
        opacity: 0,
        y: 100,
      })
      .to(el, { opacity: 1, y: 0, duration: 1 })
  }

  fadeRight(el: HTMLElement) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'bottom bottom',
      },
    });

    tl
      .from(el, {
        opacity: 0,
        x: 100,
      })
      .to(el, { opacity: 1, x: 0, duration: 1 })
  }
}
