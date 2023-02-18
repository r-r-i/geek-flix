import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardComponent } from './home-card/home-card.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCardComponent
  },
  {
    path: 'movieInfo',
    component: InfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
