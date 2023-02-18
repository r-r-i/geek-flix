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
  noMoooovies: boolean;

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
          this.noMoooovies = true;
        }
      });
  }

  handleMovieClickEvent(movie: IBasicMovie) {
    this.showAll = false;
    this.showDetailedMovie = true;
  }
}
