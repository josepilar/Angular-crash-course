import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent{
  title: string = "Basics stater"
  title2: string;
  constructor() {}
}