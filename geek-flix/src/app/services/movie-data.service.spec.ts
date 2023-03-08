import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {

  let spectator: SpectatorHttp<MovieDataService>;
  const createHttp = createHttpFactory(MovieDataService);

  beforeEach(() => spectator = createHttp())


  it('should query TMDB via a GET request', () => {
    // arrange
    // TODO: set up the service to inject a mock HTTPClient and it returns something you want it to reutrn
    spectator.service.getTopMovies().subscribe();

    // act
    // TODO: Call the method under test
    spectator.expectOne('https://api.themoviedb.org/3/discover/movie?api_key=9279f87c4b7f1cb1474b6d7cd6958a6d&language=en-US&with_genres=878', HttpMethod.GET);

    // assert
    // test that it has been called
    expect(spectator.service).toBeTruthy();
    expect(spectator.service.getTopMovies).toBeTruthy();
  });
});
