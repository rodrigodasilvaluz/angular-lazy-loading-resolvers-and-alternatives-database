import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { JsonplaceholderInterface, ObsJsonplaceholderInterface } from 'src/app/shared/interfaces/jsonplaceholder.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderResolver implements Resolve<ObsJsonplaceholderInterface> {
  constructor(private http: HttpClient) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<ObsJsonplaceholderInterface> {
    return this.http
      .get<JsonplaceholderInterface[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((jsonplaceholder: JsonplaceholderInterface[]) => ({
          success: jsonplaceholder,
        })),
        catchError(() => of({ error: 'Não foi possível carregar a jsonplaceholder' }))
      );
  }
}
