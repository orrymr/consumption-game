import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items = ITEMS;
  foo: number = 2;

  constructor() { }

  ngOnInit() {
  }

  thumbUp(id: number): void {
    let item = this.items.find(i => i.id === id);
    if (!item.hasVotedUp && !item.hasVotedDown){
  	  item.upCount = item.upCount + 1;
  	  item.hasVotedUp = true;
  	}
  }

  thumbDown(id: number): void {
    let item = this.items.find(i => i.id === id);
  	if (!item.hasVotedUp && !item.hasVotedDown){
  	  item.downCount = item.downCount + 1;
  	  item.hasVotedDown = true;
    }
  }

}
