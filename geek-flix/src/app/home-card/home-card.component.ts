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
  // active icons
  upReactionActive = false;
  downReactionActive = false;
  starReactionActive = false;
  reactionData: any;


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
    this.loadReaction();
  }
  loadReaction() {
    let reaction: any = localStorage.getItem(this.title);
    this.reactionData = JSON.parse(reaction);
    if (!this.reactionData) {
      this.upReactionActive = false;
      this.downReactionActive = false;
      this.starReactionActive = false;
    } else if (this.selectedMovieId = this.reactionData.id && this.reactionData.reaction == 'upvote') {
      this.upReactionActive = true;
      this.downReactionActive = false;
      this.starReactionActive = false;
    } else if (this.selectedMovieId = this.reactionData.id && this.reactionData.reaction == 'downvote') {
      this.downReactionActive = true;
      this.upReactionActive = false;
      this.starReactionActive = false;
    } else if (this.selectedMovieId = this.reactionData.id && this.reactionData.reaction == 'favourite') {
      this.starReactionActive = true;
      this.upReactionActive = false;
      this.downReactionActive = false;
    }
  }
  saveUpvoteReaction() {
    let reaction = {
      id: this.selectedMovieId,
      name: this.title,
      reaction: 'upvote'
    };
    localStorage.setItem(this.title, JSON.stringify(reaction));
    this.loadReaction();
  }
  saveDownvoteReaction() {
    let reaction = {
      id: this.selectedMovieId,
      name: this.title,
      reaction: 'downvote'
    };
    localStorage.setItem(this.title, JSON.stringify(reaction));
    this.loadReaction();

  }
  saveStarReaction() {
    let reaction = {
      id: this.selectedMovieId,
      name: this.title,
      reaction: 'favourite'
    };
    localStorage.setItem(this.title, JSON.stringify(reaction));
    this.loadReaction();
  }
}
