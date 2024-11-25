import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { People } from '../model/people';

@Injectable({
  providedIn: 'root',
})
export class PepopleServiceService {
  url = 'https://swapi.dev/api/people';
  http = inject(HttpClient);

  fetchPepople = (): Observable<People[]> => {
    return this.http
      .get<{ results: People[] }>(this.url)
      .pipe(map((data) => data.results));
  };

  tetchWorlwide = (url: string): Observable<any> => {
    console.log('url: ', url);
    return this.http.get<any>(url);
  };
}
