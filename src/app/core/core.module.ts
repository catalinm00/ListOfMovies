import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [HttpClientModule, FormsModule],
  exports: [HttpClientModule, NavbarComponent],
})
export class CoreModule {}
