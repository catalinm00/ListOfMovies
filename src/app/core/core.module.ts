import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent],
  imports: [HttpClientModule,],
  exports: [HttpClientModule, NavbarComponent],
})
export class CoreModule {}
