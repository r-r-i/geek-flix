import { Component, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
  IReactions,
} from '../shared-types/paginated-movies.model';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {
  showSimilarMovies: boolean;

  movies: IBasicMovie[];
  movieSelected: IBasicMovie;
  showAll = true;
  showDetailedMovie = false;
  selectedMovieId: number;
  noMovies: boolean;
  // id used for getting similarMovies by id
  movieId: number;

  // icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faHeart = faHeart;
  // active icons
  upReactionActive = false;
  downReactionActive = false;
  starReactionActive = false;
  reactionData: IReactions;

  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.initMovies();
  }

  private initMovies() {
    this.movieDataService.getTopMovies().subscribe(
      (paginatedMovies: IPaginatedMovies) => {
        this.movies = paginatedMovies.results;
        console.warn(paginatedMovies);
        if (!this.selectedMovieId && this.movies.length > 0) {
          this.selectedMovieId = this.movies[0].id;
        } else if (this.movies.length == 0) {
          this.noMovies = true;
        }
      });

    this.movieDataService.currentMovieId.subscribe(
      movieId => {
        this.movieId = movieId;
        console.log(movieId)
      });
  }

  handleMovieClickEvent(movie: IBasicMovie) {
    this.movieSelected = movie;
    this.showAll = true;
    this.showDetailedMovie = true;
    this.selectedMovieId = movie.id;
    this.showSimilarMovies = true;
    this.loadReaction();
  }

  handleSimilarMovieClicked(movie: IBasicMovie){
    this.movieSelected = movie;
    this.loadReaction();
  }

  loadReaction() {
    this.reactionData = JSON.parse(localStorage.getItem(this.movieSelected.title) || '{}');

    if (this.reactionData.id == null && this.reactionData.name == null && this.reactionData.reaction == null) {
      this.upReactionActive = false;
      this.downReactionActive = false;
      this.starReactionActive = false;
    }
    if (this.selectedMovieId === this.reactionData.id) {
      if (this.reactionData.reaction === 'upvote') {
        this.upReactionActive = true;
        this.downReactionActive = false;
        this.starReactionActive = false;
        return;
      }
    }
    if (this.reactionData.reaction == 'downvote') {
      this.upReactionActive = false;
      this.downReactionActive = true;
      this.starReactionActive = false;
      return;
    }
    if (this.reactionData.reaction == 'favourite') {
      this.upReactionActive = false;
      this.downReactionActive = false;
      this.starReactionActive = true;
      return;
    }
  }
  saveUpvoteReaction() {
    let reaction = {
      id: this.selectedMovieId,
      name: this.movieSelected.title,
      reaction: 'upvote',
    };
    localStorage.setItem(this.movieSelected.title, JSON.stringify(reaction));
    this.loadReaction();
  }
  saveDownvoteReaction() {
    let reaction = {
      id: this.selectedMovieId,
      name: this.movieSelected.title,
      reaction: 'downvote',
    };
    localStorage.setItem(this.movieSelected.title, JSON.stringify(reaction));
    this.loadReaction();
  }
  saveStarReaction() {
    let reaction = {
      id: this.selectedMovieId,
      name: this.movieSelected.title,
      reaction: 'favourite',
    };
    localStorage.setItem(this.movieSelected.title, JSON.stringify(reaction));
    this.loadReaction();
  }
}
