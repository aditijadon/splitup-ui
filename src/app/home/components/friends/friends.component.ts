import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  @Output() totalBalance: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.totalBalance.emit(200);
  }

}
