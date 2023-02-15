import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tap } from 'rxjs';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {

  movieData: any = {};
  constructor(private movieDataService: MovieDataService) {}

  @Output() dataEvent = new EventEmitter<string>();

  data: string = 'This data was passed';

  sendData() {
    this.dataEvent.emit(this.data);
    console.log(this.data);
  }

  set_id(id: number) {
    console.log(id);
  }


  

  ngOnInit(): void {
    this.movieDataService.getData().subscribe((data) => {
      this.movieData = data;
      // JSON to console
      console.warn(data);
    })
    

  }
  

}
