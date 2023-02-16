import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent {
  
  singleMovieData: any = {} ;
  
  constructor(private DataService: DataService) {}


  ngOnInit(): void {
    this.DataService.getMovie().subscribe((data) => {
      this.singleMovieData = data;
      console.warn(data);
    })
   }

 
}
