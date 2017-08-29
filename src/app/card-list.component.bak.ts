import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: [ './card-list.component.css' ],
providers: []
})
export class CardListComponent implements OnInit{

  ngOnInit(): void {
  this.getCards();
}


  selectedCard : Card;
  cards : Card[];

  constructor(
      private router: Router,
      private cardService: CardService) { }

  onSelect(card: Card): void {
  this.selectedCard = card;
}


getCards(): void {
   this.cardService.getCards().then(cards => this.cards = cards);
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedCard.id]);
}


}
