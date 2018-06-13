import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { ItemService } from '../item.service';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  foo: number = 2;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.items);
  }

  thumbUp(id: number): void {
    let item = this.items.find(i => i.id === id);
    if (!item.hasVotedUp && !item.hasVotedDown){
  	  item.upCount = item.upCount + 1;
  	  item.hasVotedUp = true;
      return;
  	}

    if (item.hasVotedUp) {
      item.upCount = item.upCount - 1;
      item.hasVotedUp = false;
      return;
    }

    if (item.hasVotedDown) {
      item.downCount = item.downCount - 1;
      item.upCount = item.upCount + 1;
      item.hasVotedDown = false;
      item.hasVotedUp = true;
    }
  }

  thumbDown(id: number): void {
    let item = this.items.find(i => i.id === id);
  	if (!item.hasVotedUp && !item.hasVotedDown){
  	  item.downCount = item.downCount + 1;
  	  item.hasVotedDown = true;
      return;
    }

    if(item.hasVotedDown) {
      item.downCount = item.downCount - 1;
      item.hasVotedDown = false;
    }

    if (item.hasVotedUp) {
      item.upCount = item.upCount - 1;
      item.downCount = item.downCount + 1;
      item.hasVotedUp = false;
      item.hasVotedDown = true;
    }
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}
