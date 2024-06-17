import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin'

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent implements AfterViewInit {
  index = input.required<number>();
  title = input.required<string>();

  inputSpan = viewChild<ElementRef>('input')
  container = viewChild<ElementRef>('container')
  caret = viewChild<ElementRef>('caret')

  ngAfterViewInit() {
    gsap.registerPlugin(TextPlugin);
    const el = this.inputSpan()?.nativeElement;
    const container = this.container()?.nativeElement;
    const caret = this.caret()?.nativeElement;

    if (!el || !container || !caret) {
      return;
    }

    const blinkingCursorTween = gsap.to(caret, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      repeatDelay: 0.5,
    });

    const tl = gsap.timeline({
      autoRemoveChildren: true,
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom bottom',
      },
    });

    tl
    .to(el, {
      text: {
        value: this.title(),
        delimiter: '',
        speed: 0.7,
      },
      onStart: () => {
        blinkingCursorTween.kill();
        gsap.to(caret, { opacity: 1 });
      }
    }, 0)
    .to(caret, { display: "none" }, ">")
    
  }
}
