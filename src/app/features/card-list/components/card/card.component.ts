import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './../../../../core/models/movie';
import { getMoviePosterPath } from 'src/app/core/utils/functions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  defaultImage = 'assets/Image-Not-Available.png';
  @Input() movie!: Movie;

  constructor(private router: Router) {}

  getPoster(path: string){
    return getMoviePosterPath(path);
  }

  openDetailsOf(movie: Movie) {
    this.router.navigate(['details', movie.id]);
  }
}
