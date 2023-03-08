import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { of } from 'rxjs/internal/observable/of';
import { MovieDataService } from '../services/movie-data.service';
import {
  IBasicMovie,
  IPaginatedMovies,
} from '../shared-types/paginated-movies.model';

import { SimilarMoviesComponent } from './similar-movies.component';

describe('SimilarMoviesComponent', () => {
  let spectator: Spectator<SimilarMoviesComponent>;
  const createComponent = createComponentFactory({
    component: SimilarMoviesComponent,
    imports: [],
    providers: [],
    declarations: [],
    mocks: [MovieDataService],
    componentMocks: [],
    detectChanges: false,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create a list of similar movies when there is a collection returned from the server', () => {
    // arrange
    const movieDataService = spectator.inject(MovieDataService);
    const movies = [
      {
        adult: true,
        id: 0,
        title: 'Django Unchained',
        poster_path: '/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
        release_date: '2023-12-25',
      } as IBasicMovie,
    ];

    movieDataService.getSimilarMovies.and.returnValue(
      of({ results: movies } as IPaginatedMovies)
    );

    // act
    spectator.detectChanges();

    // assert
    expect(spectator.component).toBeTruthy();
    expect(spectator.query('.home-text')).toHaveText('Django Unchained');
    expect(spectator.query('.home-date')).toHaveText('2023-12-25');
    expect(spectator.query('.thumbnail-img')).toHaveAttribute('src');
  });
});
