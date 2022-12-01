import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _apiKey = 'ca4ba7f40425f8071ed786ec5be39ac7';
  private _url = 'https://api.themoviedb.org/3/';
  moviesSubject: Subject<Movie[]> = new Subject<Movie[]>();

  constructor(public http: HttpClient) {}

  searchMovie(title: string, page = 1): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this._url}search/movie?api_key=${this._apiKey}&language=en-US&query=${title}&page=${page}&include_adult=false`
      )
      .pipe(map((resp: any) => resp.results));
  }

  findById(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${this._url}movie/${id}?api_key=${this._apiKey}&language=en-US`
    );
  }

  findPopularMovies() {
    return this.http
      .get<Movie[]>(
        `${this._url}movie/popular?api_key=${this._apiKey}&language=en-US&page=1`
      )
      .pipe(map((resp: any) => resp.results));
  }

  getMoviePosterPath(path: string) {
    if (path == null) return 'assets/Image-Not-Available.png';
    return `https://image.tmdb.org/t/p/original/${path}`;
  }
}
