import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Card } from './card';
import { CARDS } from './mock-cards';



@Injectable()
export class CardService {

  private cardsUrl = 'https://fiveringsdb.com/cards';  // URL to web api

constructor(private http: Http) { }

getCards() : Promise<Card[]>{
  return this.http.get(this.cardsUrl)
             .toPromise()
             .then(response => response.json().records as Card[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}



  getCard(id: string): Promise<Card> {
  return this.getCards()
             .then(cards => cards.find(card => card.id === id));
};
}
