import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css']
})
export class FavMovieComponent {
@Input() movieTitle: string;
  // Fix this by making a shared type.
  favouriteMovies: Array<{date: string, id: number, name: string, poster_path: string, reaction: string }> = [];


  ngOnInit(): void {
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    Object.keys(localStorage).forEach(data => {
      let item = JSON.parse(localStorage.getItem(data) || '{}');

      if (item.reaction == 'favourite') {
        this.favouriteMovies.push(item)
      }
    })

  }
}
