import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CoreModule, SharedModule, AngularSvgIconModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
