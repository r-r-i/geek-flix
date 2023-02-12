import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getData() {
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US&with_genres=878';
    return this.http.get(url);
  }
}
