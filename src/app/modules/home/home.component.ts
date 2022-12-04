import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movies$: Observable<Movie[]>;
  maxPages$: Observable<number>;
  constructor(private service: MovieService) {
    this.movies$ = this.service.getMovies();
    this.maxPages$ = this.service.getMaxPageNumber();
  }

  changeSearchPage(page: number) {
    this.service.searchMovie(this.service.getMovieTitle(), page).subscribe();
  }
}
