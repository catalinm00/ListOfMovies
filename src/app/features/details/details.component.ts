import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { getLanguages, getMoviePosterPath } from './../../core/utils/functions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnDestroy {
  subscription!: Subscription;
  movie!: Movie;

  constructor(private service: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.subscription = this.service
        .findById(params['id'])
        .subscribe((val) => {
          this.movie = val;
        });
    });
  }

  getPoster(path: string) {
    return getMoviePosterPath(path);
  }

  getLanguages(movie: Movie){
    return getLanguages(movie)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
