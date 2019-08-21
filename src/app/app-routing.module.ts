import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CharactersComponent } from './characters/characters.component';
import { BasicsComponent } from './basics/basics.componnet';


const routes: Routes = [
  {
    path: 'films',
    component: MoviesComponent
  },
  {
    path: 'characters/:id',
    component: MoviesComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: '',
    component: BasicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
