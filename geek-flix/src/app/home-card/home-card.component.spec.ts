import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { of } from 'rxjs/internal/observable/of';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
} from '../shared-types/paginated-movies.model';

import { HomeCardComponent } from './home-card.component';

describe('HomeCardComponent', () => {
  let spectator: Spectator<HomeCardComponent>;
  const createComponent = createComponentFactory({
    component: HomeCardComponent,
    imports: [],
    providers: [],
    declarations: [],
    mocks: [MovieDataService],
    componentMocks: [],
    detectChanges: false,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should show a list of movies when there is a collection returned from the server ', () => {
    // arrange
    // 1. setup the mock server to return a collection of 1 movies
    const movieDataService = spectator.inject(MovieDataService);
    const movies = [
      {
        adult: true,
        id: 1,
        title: 'Blue Lagoon',
        poster_path: '/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg',
        release_date: '2023.02.15',
      } as IBasicMovie,
    ];

    movieDataService.getTopMovies.and.returnValue(
      of({ results: movies } as IPaginatedMovies)
    );

    // act
    spectator.detectChanges();

    // assert
    expect(spectator.component).toBeTruthy();
    expect(spectator.query('.home-text')).toHaveText('Blue Lagoon');
    expect(spectator.query('.home-date')).toContainText('2023');

    // test that the image is there.
    expect(spectator.query('.thumbnail-img')).toHaveAttribute('src');
  });

  it('should show a message to the user when there are no movies', () => {
    const movieDataService = spectator.inject(MovieDataService);
    const movies = [
      {
        adult: true,
        id: 1,
        title: 'Blue Lagoon',
        poster_path: '/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg',
        release_date: '2023.02.15',
      } as IBasicMovie,
    ];

    movieDataService.getTopMovies.and.returnValue(
      of({ results: movies } as IPaginatedMovies)
    );

    // act
    spectator.detectChanges();

    // assert
    expect(spectator.component).toBeTruthy();

    // test if warning message is shown
    if (spectator.component.noMovies == true) {
      expect(spectator.query('.home-warning')).toHaveText(
        'Sorry, we currently cannot display any movies. Please try again later.'
      );
    } else {
      expect(spectator.component.noMovies == false);
    }
  });

  xit('should allow a user to click on a movie and see the details component', () => {});

  xit('should ', () => {});

  xit('should ', () => {});

  xit('should ', () => {});
});
