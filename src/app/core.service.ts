import { Injectable, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_CHARACTER, GET_CHARACTERS } from './graphql.operations';
import { combineLatest, map, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  page = signal<number>(1);
  filter = signal<string>('');

  constructor(private apollo: Apollo) {}

  private characters$ = combineLatest([
    toObservable(this.page),
    toObservable(this.filter),
  ]).pipe(
    switchMap(([page, filter]) => {
      return this.apollo
        .watchQuery({
          query: GET_CHARACTERS,
          variables: { page, filter: { species: filter } },
        })
        .valueChanges.pipe(
          map((response: any) => response?.data?.characters?.results)
        );
    })
  );

  public characters = toSignal(this.characters$, { initialValue: [] });

  public selectNextPage(page: number) {
    this.page.set(page);
  }

  public filterBySpecies(species: string) {
    this.filter.set(species);
  }

  public getCharacter(id: string) {
    return this.apollo
      .watchQuery({
        query: GET_CHARACTER,
        variables: { characterId: id },
      })
      .valueChanges.pipe(map((result: any) => result?.data?.character));
  }
}
