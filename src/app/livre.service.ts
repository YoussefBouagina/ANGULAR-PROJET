import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from './model/livre.model';
import { Genre } from './model/genre.model';
import { GenreWrapper } from './model/genreWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  // Update these URLs to match your actual backend URLs
  private apiURL = 'http://localhost:8080/api/livres';
  private apiURLgen = 'http://localhost:8080/api/genres';

  constructor(private http: HttpClient) {}

  listelivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiURL);
  }

  ajouterlivre(liv: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.apiURL, liv, httpOptions);
  }

  supprimerlivre(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`, httpOptions);
  }

  consulterlivre(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.apiURL}/${id}`);
  }

  updatelivre(l: Livre): Observable<Livre> {
    return this.http.put<Livre>(this.apiURL, l, httpOptions);
  }

  listegenres(): Observable<GenreWrapper> {
    return this.http.get<GenreWrapper>(this.apiURLgen);
  }
}