import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _apiKey = 'ca4ba7f40425f8071ed786ec5be39ac7';
  private _url = 'https://api.themoviedb.org/3/';
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  private maxPageNumber = new BehaviorSubject<number>(1);
  private currentPageNumber = new BehaviorSubject<number>(1);
  private movieTitle = '';
  constructor(public http: HttpClient) {}

  searchMovie(title: string = this.movieTitle, page = 1): Observable<Movie[]> {
    if (title === '' || title !== this.movieTitle) {
      this.setMovieTitle(title);
      this.setCurrentPageNumber(1);
    }
    return this.http
      .get<Movie[]>(
        `${this._url}search/movie?api_key=${this._apiKey}&language=en-US&query=${title}&page=${page}&include_adult=false`
      )
      .pipe(
        tap((resp: any) => {
          this.setCurrentPageNumber(page);
          this.setMaxPageNumber(resp.total_pages);
        }),
        map((resp: any) => resp.results),
        tap(movies => this.setMovies(movies))
      );
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
      .pipe(
        map((resp: any) => resp.results),
        tap(movies => this.setMovies(movies))
      );
  }

  getMoviePosterPath(path: string) {
    if (path == null) return 'assets/Image-Not-Available.png';
    return `https://image.tmdb.org/t/p/original/${path}`;
  }

  getMovies() {
    return this.moviesSubject.asObservable();
  }

  setMovies(movies: Movie[]) {
    this.moviesSubject.next(movies);
  }

  getMaxPageNumber() {
    return this.maxPageNumber.asObservable();
  }

  setMaxPageNumber(page: number) {
    this.maxPageNumber.next(page);
  }

  getCurrentPageNumber() {
    return this.currentPageNumber.asObservable();
  }

  setCurrentPageNumber(page: number) {
    this.currentPageNumber.next(page);
  }

  getMovieTitle() {
    return this.movieTitle;
  }

  setMovieTitle(title: string) {
    this.movieTitle = title;
  }
}
