import { Component, Input } from '@angular/core'
import type { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  // Add Props
  @Input() hero?: Hero
}
