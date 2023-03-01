import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FavPageComponent } from './fav-page/fav-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCardComponent,
    SimilarMoviesComponent,
    FavPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
