import { Component, Input } from '@angular/core';
import { IReactions } from '../shared-types/paginated-movies.model';

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css']
})
export class FavMovieComponent {
@Input() movieTitle: string;

  newValues: any = [];


  ngOnInit(): void {
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    Object.keys(localStorage).forEach(data => {
      let item = JSON.parse(localStorage.getItem(data) || '{}');

      if(item.reaction == 'favourite') {
        this.newValues.push(item)
        console.log('hello', this.newValues)
      }

    })








  // let values = [],
  //   keys = Object.keys(localStorage),
  //   i = keys.length;

  //   while ( i-- ) {

  //     values.push(localStorage.getItem(keys[i]));
  //   }
  //   console.log(values);
  //   console.log(values[0])

  //   if (values[0]?.includes('upvote')) {
  //     console.log('hello')
  //   }






  }
}
