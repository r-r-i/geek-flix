import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginatedMovies } from '../shared-types/paginated-movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  api_key: "api_key=9279f87c4b7f1cb1474b6d7cd6958a6";

  public getTopMovies(): Observable<IPaginatedMovies> {
    // TODO: Break up the string generation. Base, action, params, key
    return this.http.get<IPaginatedMovies>('https://api.themoviedb.org/3/discover/movie?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US&with_genres=878');
  };

  public getSimilarMovies(): Observable<IPaginatedMovies> {
    return this.http.get<IPaginatedMovies>('https://api.themoviedb.org/3/movie/505642/similar?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US');
  }


  // public getMovie(movieId: number) {
  //   return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US`)
  // }
}


