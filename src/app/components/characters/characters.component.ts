import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core.service';
import { Observable, tap } from 'rxjs';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  public page: number = 1;

  public characters = this.core.characters;

  constructor(private core: CoreService) {}

  public next() {
    this.page++;
    this.core.selectNextPage(this.page);
  }

  public previous() {
    this.page--;
    this.core.selectNextPage(this.page);
  }

  public selectSpecies(species: string) {
    this.core.filterBySpecies(species);
  }
}
