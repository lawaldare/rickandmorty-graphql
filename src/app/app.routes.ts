import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { LocationsComponent } from './components/locations/locations.component';

export const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
];
