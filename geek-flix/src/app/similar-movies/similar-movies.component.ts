import { Component, Output, Input, EventEmitter } from '@angular/core';
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
  @Input () movieId: number;
  @Output () movieClicked = new EventEmitter<IBasicMovie>();

  movies: IBasicMovie[];
  showDetailedMovie = false;
  noMovies: boolean;

  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.initSimilarMovies(this.movieId);
  }

  initSimilarMovies(movieId: number) {
    this.movieDataService.getSimilarMovies(movieId).subscribe(
      (paginatedMovies: IPaginatedMovies) => {
        this.movies = paginatedMovies.results;
        console.warn(paginatedMovies);
        this.noMovies = (this.movies.length == 0);
      });
  }

  handleMovieClickEvent(movie: IBasicMovie) {
    this.movieClicked.emit(movie);
  }

}
