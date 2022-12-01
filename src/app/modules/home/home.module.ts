import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CardListModule } from 'src/app/features/card-list/card-list.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, CoreModule, CardListModule],
  exports: [HomeComponent],
})
export class HomeModule {}
