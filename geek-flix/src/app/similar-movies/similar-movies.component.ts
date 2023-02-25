import { Component, Output, EventEmitter } from '@angular/core';
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
  showDetailedMovie = false;
  selectedMovieId: number;
  noMovies: boolean;

  title: string;
  description: string;
  backdrop: string;
  date: string;
  rating: number;

  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.movieDataService
      .getSimilarMovies()
      .subscribe((paginatedMovies: IPaginatedMovies) => {
        this.movies = paginatedMovies.results;
        console.warn(paginatedMovies);
        if (!this.selectedMovieId && this.movies.length > 0) {
          this.selectedMovieId = this.movies[0].id;
        } else if (this.movies.length == 0) {
          this.noMovies = true;
        }
      });
  }


  handleMovieClickEvent(movie: IBasicMovie) {
    console.log(`*** MovieDataService.handleMovieClickEvent We're in the handling of the movie click event thing`);
    this.selectedMovieId = movie.id;
    this.showDetailedMovie = true;

    this.title = movie.title;
    this.description = movie.overview;
    this.backdrop = movie.poster_path;
    this.date = movie.release_date;
    this.rating = movie.vote_average;

  }
}
