import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardListModule { }
