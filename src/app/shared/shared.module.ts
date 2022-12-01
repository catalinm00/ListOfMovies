import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, LazyLoadImageModule],
  exports: [CommonModule, FormsModule, LazyLoadImageModule],
})
export class SharedModule {}
