import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Result, SearchResponse } from './model';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private API = 'https://rickandmortyapi.com/api/character/';
  private http = inject(HttpClient)

  private getCharacteresRequest(url: string): Observable<SearchResponse | null> {
    return this.http.get<SearchResponse | null>(url).pipe(catchError(this.handleError));
  }

  searchByName(name: string): Observable<SearchResponse | null> {
    const url = `${this.API}?name=${name}`;
    return this.getCharacteresRequest(url);
  }

  searchByStatus(status: string): Observable<SearchResponse | null> {
    const url = `${this.API}?status=${status}`;
    return this.getCharacteresRequest(url);
  }

  searchById(id: number): Observable<Result | null> {
    const url = this.API + id;
    return this.http.get<Result | null>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return of(null);
    }
    console.log('handleError: ', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
