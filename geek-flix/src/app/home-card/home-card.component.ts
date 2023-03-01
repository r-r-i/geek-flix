import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
  IReactions,
} from '../shared-types/paginated-movies.model';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {

  movies: IBasicMovie[];
  movieSelected: IBasicMovie;
  selectedMovieId: number;
  movieId: number;
  noMovies: boolean;
  reactionData: IReactions;
  showDetailedMovie = false;
  showSimilarMovies: boolean;

  // icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faHeart = faHeart;
  faImdb = faImdb;
  // active icon class dependency
  upReactionActive = false;
  downReactionActive = false;
  starReactionActive = false;


  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.initMovies();
  }
  private initMovies() {
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
    this.movieDataService.currentMovieId.subscribe((movieId) => {
      this.movieId = movieId;
      console.log('movieId:', movieId);
    });
  }
  handleMovieClickEvent(movie: IBasicMovie) {
    this.movieSelected = movie;
    this.showDetailedMovie = true;
    this.selectedMovieId = movie.id;
    this.showSimilarMovies = true;

    this.loadReaction();
    console.log('movieSelected.id:', this.movieSelected.id);
    this.initMovies();
  }
  handleSimilarMovieClicked(movie: IBasicMovie) {
    this.movieSelected = movie;
    this.loadReaction();
  }
  loadReaction() {
    this.reactionData = JSON.parse(
      localStorage.getItem(this.movieSelected.title) || '{}'
    );

    if (this.reactionData.id == null && this.reactionData.name == null && this.reactionData.reaction == null) {
      this.upReactionActive = false;
      this.downReactionActive = false;
      this.starReactionActive = false;
      return;
    }

    this.upReactionActive = this.reactionData.reaction == 'upvote';
    this.downReactionActive = this.reactionData.reaction == 'downvote';
    this.starReactionActive = this.reactionData.reaction == 'favourite';
    return;
  }
  saveUpvoteReaction() {
    let reaction = {
      id: this.movieSelected.id,
      name: this.movieSelected.title,
      reaction: 'upvote',
    };
    localStorage.setItem(this.movieSelected.title, JSON.stringify(reaction));
    this.loadReaction();
  }
  saveDownvoteReaction() {
    let reaction = {
      id: this.movieSelected.id,
      name: this.movieSelected.title,
      reaction: 'downvote',
    };
    localStorage.setItem(this.movieSelected.title, JSON.stringify(reaction));
    this.loadReaction();
  }
  saveStarReaction() {
    let reaction = {
      id: this.movieSelected.id,
      name: this.movieSelected.title,
      reaction: 'favourite',
    };
    localStorage.setItem(this.movieSelected.title, JSON.stringify(reaction));
    this.loadReaction();
  }
}
