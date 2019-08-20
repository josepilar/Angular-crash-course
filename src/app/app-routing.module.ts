import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CharactersComponent } from './characters/characters.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    pathMatch: 'full'
  },
  {
    path: 'characters/:id',
    component: MoviesComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
