import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CoreModule, SharedModule, FontAwesomeModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
