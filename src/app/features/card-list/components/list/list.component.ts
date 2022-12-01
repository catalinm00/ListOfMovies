import { Component, OnDestroy } from '@angular/core';
import { Movie } from './../../../../core/models/movie';
import { MovieService } from './../../../../shared/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy {
  movies!: Movie[];
  popularMovies = this.service
    .findPopularMovies()
    .subscribe((res) => (this.movies = res));
  searchMovies = this.service.moviesSubject.subscribe(
    (res) => (this.movies = res)
  );

  constructor(public service: MovieService) {}

  ngOnDestroy(): void {
      this.popularMovies.unsubscribe()
      this.searchMovies.unsubscribe();
  }
}
