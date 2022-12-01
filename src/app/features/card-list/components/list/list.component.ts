import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from './../../../../core/models/movie';
import { MovieService } from './../../../../shared/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy {
  movies!: Movie[];
  private popularMovies: Subscription;
  private searchMovies: Subscription;

  constructor(private service: MovieService) {
    this.popularMovies = this.service
      .findPopularMovies()
      .subscribe((res) => (this.movies = res));
    this.searchMovies = this.service.moviesSubject.subscribe(
      (res) => (this.movies = res)
    );
  }

  ngOnDestroy(): void {
    this.popularMovies.unsubscribe();
    this.searchMovies.unsubscribe();
  }
}
