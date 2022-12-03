import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() maxPages!: number;
  @Output() currentPageEmitter = new EventEmitter<number>();
  currentPage = 1;
  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  nextPage() {
    if (this.currentPage < this.maxPages) {
      this.currentPage++;
      this.currentPageEmitter.emit(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPageEmitter.emit(this.currentPage);
    }
  }
}
