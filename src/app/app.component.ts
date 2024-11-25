import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PepopleServiceService } from './core/pepople-service.service';
import { People } from './model/people';
import {
  combineLatest,
  filter,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cye';
  name = 'Paweł Wasilonek';
  peopleService = inject(PepopleServiceService);
  person$!: Observable<People & { homeworldName: string }>;

  ngOnInit(): void {
    this.person$ = this.peopleService.fetchPepople().pipe(
      // tap((data) => console.log('data:', data)),
      switchMap((p) => {
        const person =
          p.filter((d) => d.name === 'Leia Organa')[0] ?? undefined;

        if (person?.homeworld) {
          return this.peopleService.tetchWorlwide(person.homeworld).pipe(
            map((homeworld) => ({
              ...person,
              homeworldName: homeworld?.name,
            }))
          );

          // .pipe(tap((data) => console.log('data:', data)));
        }

        return of();
      })
    );
    // map((data) => data.results.filter((p) => p.name === 'Leia Organa')))
  }
}
