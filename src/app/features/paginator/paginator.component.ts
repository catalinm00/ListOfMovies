import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() maxPages!: number;
  @Output() currentPageChange = new EventEmitter<number>();
  @Input() currentPage!:number;
  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  nextPage() {
    if (this.currentPage < this.maxPages) {
      this.currentPage++;
      this.currentPageChange.emit(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPageChange.emit(this.currentPage);
    }
  }
}
