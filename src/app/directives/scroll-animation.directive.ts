import { Directive, ElementRef, OnInit, inject, input } from '@angular/core';
import { AnimationService } from '../services/animation.service'

@Directive({
  selector: '[appScrollAnimation]',
  inputs: [],
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  el = inject(ElementRef);
  animationService = inject(AnimationService);
  direction = input<boolean>(true);

  ngOnInit(): void {
    this.direction() ? 
      this.animationService.fadeUp(this.el.nativeElement) : 
      this.animationService.fadeRight(this.el.nativeElement);
  }

}
