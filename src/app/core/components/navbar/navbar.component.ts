import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = '';
  constructor(private service: MovieService, private router: Router) {}

  searchMovies() {
    this.router.navigate(['']);
    if (this.title.trim().length > 0) {
      this.router.navigate(['']);
      this.service
        .searchMovie(this.title)
        .subscribe((resp) => this.sendMovies(resp));
    }
  }
  sendMovies(movies: Movie[]) {
    this.service.moviesSubject.next(movies);
  }
}
