import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { CardService } from './card.service';
import { Card } from './card';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: [ './card-detail.component.css' ]
})

export class CardDetailComponent implements OnInit {

    card : Card;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private location: Location
  ) {};
ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.cardService.getCard(params.get('id')))
    .subscribe(card => this.card = card);
};

goBack(): void {
  this.location.back();
};
}
