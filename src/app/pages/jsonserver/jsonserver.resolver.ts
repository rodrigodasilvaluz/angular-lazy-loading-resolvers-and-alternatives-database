import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import {
  JsonserverInterface,
  ObsJsonserverInterface,
} from 'src/app/shared/interfaces/jsonserver.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JsonserverResolver implements Resolve<ObsJsonserverInterface> {

  private api = environment.apiJsonServer;

  constructor(private http: HttpClient) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<ObsJsonserverInterface> {
    return this.http
      .get<JsonserverInterface[]>(`${this.api}/animals`)
      .pipe(
        map((jsonserver: JsonserverInterface[]) => ({
          success: jsonserver,
        })),
        catchError(() => of({ error: 'Não foi possível carregar a jsonserver' }))
      );
  }
}
