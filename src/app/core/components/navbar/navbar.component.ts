import { Component } from '@angular/core';
import { MovieService } from './../../../shared/services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  search = '';
  constructor(public service: MovieService) {}

  searchMovies() {
    console.log(this.search);

    this.service
      .searchMovie(this.search)
      .subscribe((resp) => this.service.moviesSubject.next(resp));
  }
}
