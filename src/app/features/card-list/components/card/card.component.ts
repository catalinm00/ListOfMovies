import { Component, Input } from '@angular/core';
import { Movie } from './../../../../core/models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie!: Movie;
  getMoviePosterPath(path: string) {
    if (path == null) return 'assets/Image-Not-Available.png';
    return `https://image.tmdb.org/t/p/original/${path}`;
  }
}
