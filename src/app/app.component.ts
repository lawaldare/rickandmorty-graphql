import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rickandmorty';
}
