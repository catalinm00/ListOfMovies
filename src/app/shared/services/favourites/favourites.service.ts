import { Injectable } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  removeMovie(movie: Movie) {
    localStorage.removeItem(movie.id.toString());
  }

  addMovie(movie: Movie) {
    localStorage.setItem(movie.id.toString(), JSON.stringify(movie));
  }

  isFavourite(movie: Movie) {
    if (localStorage.getItem(movie.id.toString()) != null) return true;
    else return false;
  }
}
