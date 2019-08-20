import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Film } from './types/film';
import { Character } from './types/character';
import { Planet } from './types/planet';
import { Ship } from './types/ships';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private corsSkipper = 'https://cors-anywhere.herokuapp.com/';
  films: Array<Film>;
  characters: Array<Character>;
  ships: Array<Ship>;
  planets: Array<Planet>;


  constructor(private http: HttpClient) { }

  getFilms(): Observable<any> {
    return this.http.get(`${this.corsSkipper}https://swapi.co/api/films`);
  }

  getCharacters(link?: string): Observable<any> {
    return this.http.get(`${this.corsSkipper}${link ? link : 'https://swapi.co/api/people'}`);
  }

  getShips(): Observable<any> {
    return this.http.get(`${this.corsSkipper}https://swapi.co/api/starships`);
  }

  getPlanets(): Observable<any> {
    return this.http.get(`${this.corsSkipper}https://swapi.co/api/planets`);
  }
}
