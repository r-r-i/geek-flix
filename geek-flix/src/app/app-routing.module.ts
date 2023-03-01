import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavPageComponent } from './fav-page/fav-page.component';
import { HomeCardComponent } from './home-card/home-card.component';

const routes: Routes = [
  {
    component: HomeCardComponent,
    path: ''
  },
  {
    component: FavPageComponent,
    path: 'favourites'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
