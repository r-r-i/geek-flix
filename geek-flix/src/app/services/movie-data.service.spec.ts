import { TestBed } from '@angular/core/testing';

import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {
  // TODO: Convert this spec file to a spectator based one: https://ngneat.github.io/spectator/docs/testing-services

  let service: MovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDataService);
  });

  it('should be created', () => {
    // arrange
    // todo: set up the service to inject a mock HTTPClient and it returns something you want it to reutrn

    // act
    // TODO: Call the method under test

    // assert
    expect(service).toBeTruthy();
    // test that it has been called

  });
});
