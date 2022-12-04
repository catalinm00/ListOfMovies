import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { FavouritesComponent } from './favourites.component';

const routes: Routes = [
  { path: '', component: FavouritesComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouritesRoutingModule {}
