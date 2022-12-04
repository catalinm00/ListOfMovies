import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { PaginatorComponent } from 'src/app/features/paginator/paginator.component';
import { ListComponent } from 'src/app/features/card-list/components/list/list.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, CoreModule, ListComponent, PaginatorComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
