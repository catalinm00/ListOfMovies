import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PipeModule } from './pipes/pipe.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [HttpClientModule, FormsModule, AppRoutingModule, PipeModule],
  exports: [HttpClientModule, NavbarComponent, AppRoutingModule, PipeModule],
})
export class CoreModule {}
