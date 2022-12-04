import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, LazyLoadImageModule, FontAwesomeModule],
  exports: [CommonModule, FormsModule, LazyLoadImageModule, FontAwesomeModule,],
})
export class SharedModule {}
