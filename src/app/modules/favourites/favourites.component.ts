import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { FavouritesService } from './../../shared/services/favourites/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  movies!: Movie[];

  constructor(private service: FavouritesService) {}

  ngOnInit() {
    this.movies = this.service.getFavouriteMovies();
  }
}
