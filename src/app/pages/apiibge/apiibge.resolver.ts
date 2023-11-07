import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import {
  ApiibgeInterface,
  ApiibgeItemsInterface,
  ObsApiibgeInterface,
} from 'src/app/shared/interfaces/apiibge.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiibgeResolver implements Resolve<ObsApiibgeInterface> {
  private api: string = environment.apiIbge;

  constructor(private http: HttpClient) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<ObsApiibgeInterface> {
    return this.http.get<ApiibgeInterface>(`${this.api}/noticias/?qtd=10`).pipe(
      map((apiibge: ApiibgeInterface) => ({
        success: this.normalizeImagens(apiibge),
      })),
      catchError(() =>
        of({ error: 'Não foi possível carregar a página inicial' })
      )
    );
  }

  private normalizeImagens(apiibge: ApiibgeInterface): ApiibgeInterface {
    apiibge.items.map((item: ApiibgeItemsInterface) => {
      item.imagens = JSON.parse(item.imagens);
    });
    return apiibge;
  }
}
