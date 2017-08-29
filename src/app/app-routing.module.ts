import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardDetailComponent } from './card-detail.component';
import { CardListComponent } from './card-list.component';
import { DeckComponent } from './deck.component';

const routes: Routes = [
  {    path: 'card-list',    component: CardListComponent  },
  {    path: 'deck',    component: DeckComponent  },
  {    path: 'detail/:id',    component: CardDetailComponent  },
  {    path: '',    redirectTo: '/card-list',    pathMatch: 'full'  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
