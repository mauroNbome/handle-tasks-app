import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  getPaises() {
    return this.http
      .get('https://restcountries.eu/rest/v2/region/americas')
      .pipe(
        map((resp: any[]) =>
          resp.map((pais) => ({
            nombre: pais.name,
            code: pais.alpha3Code,
          }))
        )
      );
  }
}
