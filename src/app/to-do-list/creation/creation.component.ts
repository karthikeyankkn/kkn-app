import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  whishListData: any;
  input: any;

  emitEventToChild() {
    this.input = this.whishListData;
    this.whishListData = '';
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
