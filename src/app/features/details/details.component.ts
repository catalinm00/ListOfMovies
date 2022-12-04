import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faStarAndCrescent,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription, Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { getLanguages, getMoviePosterPath } from './../../core/utils/functions';
import { NavigationService } from './../../shared/services/navigation/navigation.service';
import { FavouritesService } from './../../shared/services/favourites/favourites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  movie$!: Observable<Movie>;
  arrowLeftIcon = faArrowLeft;
  starIcon = faStar;
  xMark = faXmark;
  constructor(
    private service: MovieService,
    private favService: FavouritesService,
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.movie$ = this.service.findById(params['id']);
    });
  }

  getPoster(path: string) {
    return getMoviePosterPath(path);
  }

  getLanguages(movie: Movie) {
    return getLanguages(movie);
  }

  goBack() {
    this.navigation.back();
  }

  isFavourite(movie: Movie) {
    return this.favService.isFavourite(movie);
  }

  addToFavourites(movie: Movie) {
    this.favService.addMovie(movie);
  }

  removeFromFavourites(movie: Movie) {
    this.favService.removeMovie(movie);
  }
}
