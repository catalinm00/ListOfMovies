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

  getFavouriteMovies(): Movie[] {
    return this.parseToMovies(this.allStorage());
  }

  private allStorage() {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    const str = JSON.stringify(values); //para evitar problemas de tipado con getItem()
    return JSON.parse(str);
  }

  private parseToMovies(val: string[]) {
    const movies = [];
    for (const str of val) movies.push(JSON.parse(str));
    return movies;
  }
}
