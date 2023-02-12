import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US&with_genres=878');


  }
}
