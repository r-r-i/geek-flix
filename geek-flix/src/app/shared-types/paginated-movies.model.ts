export interface IPaginatedMovies {
    page: number;
    results: IBasicMovie[];
    total_pages: number;
    total_results: number;
}

export interface IBasicMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface IReactions {
  id: number;
  name: string;
  reaction: string;
}
export interface IFavouriteMovie {
  favMovies: [
    {
      
    }
  ]
}


