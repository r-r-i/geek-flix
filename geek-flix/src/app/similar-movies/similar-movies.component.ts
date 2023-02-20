import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
} from '../shared-types/paginated-movies.model';


@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent {
  movies: IBasicMovie[];

  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.movieDataService
      .getSimilarMovies()
      .subscribe((paginatedMovies: IPaginatedMovies) => {
        this.movies = paginatedMovies.results;
        console.warn(paginatedMovies);
      })
  }
}
