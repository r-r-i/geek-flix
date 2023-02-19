import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
} from '../shared-types/paginated-movies.model';

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {
  movies: IBasicMovie[]; // TODO: Put in a type here
  showAll = true;
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
      .getTopMovies()
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
    this.showAll = true;
    this.showDetailedMovie = true;
    this.selectedMovieId = movie.id;

    this.title = movie.title;
    this.description = movie.overview;
    this.backdrop = movie.poster_path;
    this.date = movie.release_date;
    this.rating = movie.vote_average;

    console.log(this.selectedMovieId);
    console.log(movie.title);
  }
}
