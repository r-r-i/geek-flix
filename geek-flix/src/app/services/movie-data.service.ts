import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPaginatedMovies } from '../shared-types/paginated-movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  // private movieIdSource = new BehaviorSubject<number>(123);
  // currentMovieId = this.movieIdSource.asObservable();

  api_key: "api_key=9279f87c4b7f1cb1474b6d7cd6958a6";


  constructor(private http: HttpClient) { }


  // changeMovieId(movieId: number) {
  //   // this.movieIdSource.next(movieId);
  //   this.getSimilarMovies(movieId);
  // }

  public getTopMovies(): Observable<IPaginatedMovies> {
    // TODO: Break up the string generation. Base, action, params, key
    return this.http.get<IPaginatedMovies>('https://api.themoviedb.org/3/discover/movie?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US&with_genres=878');
  };

  public getSimilarMovies(movieId: number): Observable<IPaginatedMovies> {
    console.log('getSimilarMovies() in data service', movieId);
    return this.http.get<IPaginatedMovies>(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US`);
  }

}


