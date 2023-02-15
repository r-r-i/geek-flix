import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent {
  
  data: string = '';

  constructor() {}

  ngOnInit(): void {}
  receiveData(data: string) {
    this.data = data;
  }

}
