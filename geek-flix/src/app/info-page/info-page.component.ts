import { Component, Input } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent {

  @Input()
  movieId: number;

  singleMovieData: any = {} ;

  constructor(private movieService: MovieDataService) {}

  getMovie() {
    this.movieService.getMovie(this.movieId).subscribe((data: any) => {
      this.singleMovieData = data;

      console.warn(data);
      console.log(this.movieId)
      console.log(this.singleMovieData.id)
    })
  }

  ngOnInit(): void {
    this.getMovie()
  }

}
