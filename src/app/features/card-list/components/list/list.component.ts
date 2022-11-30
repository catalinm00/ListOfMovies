import { Component, OnInit } from '@angular/core';
import { Movie } from './../../../../core/models/movie';
import { MovieService } from './../../../../shared/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies!: Movie[];

  constructor(public service: MovieService){}

  ngOnInit(): void {
    this.service.findPopularMovies().subscribe((res) => (this.movies = res));
    this.service.moviesSubject.subscribe((res) => (this.movies = res));
  }

}
