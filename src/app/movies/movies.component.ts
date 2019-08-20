import { Component, OnInit } from '@angular/core';
import { Film } from '../types/film';
import { SwapiService } from '../swapi.service';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  films: Array<Film> = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.swapiService.getFilms().subscribe(films => this.films = films['results']);
  }

}
