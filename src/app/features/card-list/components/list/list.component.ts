import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../../../../core/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() movies!: Movie[];
}
