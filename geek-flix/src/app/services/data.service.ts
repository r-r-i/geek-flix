import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  movieId = 505642;
  getMovie() {
    return this.http.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US`)

  }

}
