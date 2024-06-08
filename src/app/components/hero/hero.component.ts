import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  // animations: [
  //   trigger('bannerTrigger', [
  //     transition(":enter", [
  //       query("*", [
  //         style({ opacity: 0, transform: "translateX(-50px)" }),
  //         stagger(50, [
  //           animate(
  //             "250ms cubic-bezier(0.35, 0, 0.25, 1)",
  //             style({ opacity: 1, transform: "none" })
  //           )
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
})
export class HeroComponent {

}
