import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [CardComponent, ListComponent],
  imports: [CoreModule, SharedModule],
  exports: [CardComponent, ListComponent]
})
export class CardListModule {}
