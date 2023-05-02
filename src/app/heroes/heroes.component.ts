import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  // ngOnInit() called when the component is initialized
  ngOnInit(): void {
    this.getHeroes();
  }

  //get hero
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  //add hero, marked as void, does not return anything
  add(name: string): void {
    //trims the name, checks if its an empty string
    name = name.trim();
    //if not empty, call addHero() of heroService 
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        //updates the list of heroes displayed by the component
        this.heroes.push(hero);
      });
  }

  //delete hero, does not return anything
  delete(hero: Hero): void {
    //filters hero array of component remove hero
    this.heroes = this.heroes.filter(h => h !== hero);
    //subscribes to the observable returned but does not do anything with the result.
    //updates list of heroes 
    this.heroService.deleteHero(hero.id).subscribe();
  }

}