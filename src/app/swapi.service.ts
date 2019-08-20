import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Film } from './types/film';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor( private http: HttpClient ) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]> ('https://swapi.co/api/films');
  }
}
