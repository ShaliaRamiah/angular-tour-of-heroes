import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  //constructor takes three dependencies 
  constructor(
    private route: ActivatedRoute, //retrieve route information
    private heroService: HeroService, //getting hero data
    private location: Location //controlling browsers history stack
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  //retieving the ID parameter from route and fetch hero data using heroService
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


  //navigating to previous page in browsers history stack
  goBack(): void {
    this.location.back();
  }

  //saving hero data and navigates to previous page
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
  }
