import { AfterViewInit, Directive, ElementRef, OnInit, inject, input } from '@angular/core';
import { AnimationService } from '../services/animation.service'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Directive({
  selector: '[appScrollAnimation]',
  inputs: [],
  standalone: true
})
export class ScrollAnimationDirective implements AfterViewInit {
  el = inject(ElementRef);
  animationService = inject(AnimationService);
  direction = input<boolean>(true);
  animateElement = input<Element>();
  title = input<any>();

  ngAfterViewInit(): void {
    // this.direction() ? 
    //   this.animationService.fadeUp(this.el.nativeElement) : 
    //   this.animationService.fadeRight(this.el.nativeElement);
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollToPlugin)

    // console.log('title', this.title(), this.title().caret());

    // if (!this.animateElement) {
    //   return;
    // }

    // const el = this.el.nativeElement;
    // const tlShow = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: el,
    //     start: 'top center',
    //   },
    // });

    // tlShow
    // .fromTo(this.animateElement()!, 
    //   { scale: 0.1, opacity: 0 },
    //   { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }, ">"
    // );
  }

}
