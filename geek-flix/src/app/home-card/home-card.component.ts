import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {

  movieData: any = {};
  constructor(private movieDataService: MovieDataService) {}


  ngOnInit(): void {
    this.movieDataService.getData().subscribe((data) => {
      this.movieData = data;
      // JSON to console
      console.warn(data);
    })
  }
}
