import { Component } from '@angular/core'
import type { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES
  selectedHero?: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
