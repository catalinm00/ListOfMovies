import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardListModule } from './features/card-list/card-list.module';
import { DetailsModule } from './features/details/details.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CardListModule,
    DetailsModule,
    HomeModule,
  ],
})
export class AppModule {}
