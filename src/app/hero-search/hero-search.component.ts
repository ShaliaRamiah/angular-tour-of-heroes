import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

//declaring observable, will contain array of heroes
  heroes$!: Observable<Hero[]>;
  //managing search terms
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
//lifecycle hook
  ngOnInit(): void {
    //observable of search results
    this.heroes$ = this.searchTerms.pipe(
      //300ms between keystrokes before emitting a search term
      debounceTime(300),
      //only emit different search term if it is different from previous
      distinctUntilChanged(),
    //searching heroes based on search term
      switchMap((term: string) => this.heroService.searchHeroes(term)),
      );
    }
  }
