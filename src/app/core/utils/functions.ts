import { Movie } from '../models/movie';

export function getMoviePosterPath(path: string) {
  if (path == null) return 'assets/Image-Not-Available.png';
  return `https://image.tmdb.org/t/p/original/${path}`;
}

export function getLanguages(movie: Movie) {
  if (movie.spoken_languages.length == 0) return 'N/A';
  let str = '';
  for (const val of movie.spoken_languages) str += val.english_name + ', ';
  return str.substring(0, str.length - 2);
}
