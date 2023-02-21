import { Component, Output, EventEmitter } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
} from '../shared-types/paginated-movies.model';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {
  @Output() showSimilarMovies = new EventEmitter<boolean>();

  movies: IBasicMovie[]; // TODO: Put in a type here
  showAll = true;
  showDetailedMovie = false;
  selectedMovieId: number;
  noMovies: boolean;

  // icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faHeart = faHeart;


  title: string;
  overview: string;
  poster: string;
  release_date: string;
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
  handleShowSimilarMovies() {
    this.showSimilarMovies.emit(true);
    console.log('hello');
  }

  handleMovieClickEvent(movie: IBasicMovie) {
    this.showAll = true;
    this.showDetailedMovie = true;
    this.selectedMovieId = movie.id;

    this.title = movie.title;
    this.overview = movie.overview;
    this.poster = movie.poster_path;
    this.release_date = movie.release_date;
    this.rating = movie.vote_average;

    this.handleShowSimilarMovies();

    console.log(this.selectedMovieId);
    console.log(movie.title);
  }
}
