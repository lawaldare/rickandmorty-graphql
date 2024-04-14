import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Character } from '../../models/character.model';
import { CoreService } from '../../core.service';
import { Observable, mergeMap } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {
  public character$: Observable<Character> = this.route.params.pipe(
    mergeMap((params) => this.cs.getCharacter(params['id']))
  );

  constructor(private route: ActivatedRoute, private cs: CoreService) {}
}
