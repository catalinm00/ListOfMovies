import { NgModule } from '@angular/core';
import { FavouritesComponent } from './favourites.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardListModule } from '../../features/card-list/card-list.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CoreModule, SharedModule, CardListModule],
  exports: [FavouritesComponent]
})
export class FavouritesModule {}
