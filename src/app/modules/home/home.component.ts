import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  maxPages$!: Observable<number>;
  currentPage$!: Observable<number>;
  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.initData();
  }

  changeSearchPage(page: number) {
    this.service.searchMovie(this.service.getMovieTitle(), page).subscribe();
  }

  initData() {
    this.service.findPopularMovies().subscribe();
    this.movies$ = this.service.getMovies();
    this.maxPages$ = this.service.getMaxPageNumber();
    this.currentPage$ = this.service.getCurrentPageNumber();
  }
}
