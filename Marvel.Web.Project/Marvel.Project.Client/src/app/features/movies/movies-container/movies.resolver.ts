import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as actions from '../movies-container/store/actions';
import { Store } from '@ngrx/store';
import { selectMoviesQueryResult } from './store/selectors';
@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<any> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store.dispatch(actions.queryMovies());
    return this.store.select(selectMoviesQueryResult);
  }
}
