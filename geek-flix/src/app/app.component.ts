import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geek-flix';

  constructor(private movie:MoviesService) {
    this.movie.getData().subscribe(data => {
      console.warn(data)
    })
  }
}
