import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [HttpClientModule, FormsModule, RouterModule],
  exports: [HttpClientModule, NavbarComponent],
})
export class CoreModule {}
