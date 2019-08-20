import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Film } from './types/film';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private corsSkipper = 'https://cors-anywhere.herokuapp.com/';

  constructor( private http: HttpClient ) { }

  getFilms(): Observable<any> {
    return this.http.get(`${this.corsSkipper}https://swapi.co/api/films`);
  }
}
