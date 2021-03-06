import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Character } from '../types/character';
import { getId } from '../helpers';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Array<Character>;
  more: string;
  isLoadingMore: boolean;
  getCharacterId = getId;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.swapiService.getCharacters().subscribe(characters => {
      this.characters = characters['results'];
      this.more = characters['next'];
    });
  }

  loadMore(): void {
    this.isLoadingMore = true;
    this.swapiService.getCharacters(this.more).subscribe(characters => {
      this.characters = this.characters.concat(characters['results']);
      this.more = characters['next'];
      this.isLoadingMore = false;
    })
  }
}
