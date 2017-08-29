import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/card-list" routerLinkActive="active">Card List</a>
      <a routerLink="/deck" routerLinkActive="active">Deck</a>
    </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'L5R Deckbuilder';
}
