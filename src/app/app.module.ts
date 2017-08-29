  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail.component';
import { CardListComponent } from './card-list.component';
import { DeckComponent } from './deck.component';
import { CardService } from './card.service';

import { AppRoutingModule }     from './app-routing.module';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';




@NgModule({
  declarations: [
    AppComponent,
    CardDetailComponent,
    CardListComponent,
    DeckComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    FormsModule

  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
