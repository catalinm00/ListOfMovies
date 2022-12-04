import { Component, Input } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from '../card/card.component';
import { Movie } from './../../../../core/models/movie';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CoreModule, SharedModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() movies!: Movie[];
}
