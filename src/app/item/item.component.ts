import { Component, OnInit } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  upCount: number = 112;
  downCount: number = 23;
  hasVoted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  thumbUp(): void {
  	if (!this.hasVoted){
  	  this.upCount = this.upCount + 1;
  	  this.hasVoted = true;
  	}
  }

  thumbDown(): void {
  	if (!this.hasVoted){
  	  this.downCount = this.downCount + 1;
  	  this.hasVoted = true;
    }
  }

}
