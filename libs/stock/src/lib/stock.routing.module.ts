import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './containers';

const routes: Routes = [
  {
    path: 'stocks',
    component: StockListComponent,
  },
  {
    path: '',
    redirectTo: 'stocks',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
