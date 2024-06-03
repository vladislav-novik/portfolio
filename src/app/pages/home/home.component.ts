import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component'
import { AboutComponent } from '../../components/about/about.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
