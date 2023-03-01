import { Component, Input } from '@angular/core';
import { IReactions } from '../shared-types/paginated-movies.model';

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css']
})
export class FavMovieComponent {
@Input() movieTitle: string;

  favouriteMovies: any = [];

  ngOnInit(): void {
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    Object.keys(localStorage).forEach(data => {
      let item = JSON.parse(localStorage.getItem(data) || '{}');

      if(item.reaction == 'favourite') {
        this.favouriteMovies.push(item)
        console.log('hello', this.favouriteMovies)
      }
    })

  }
}
