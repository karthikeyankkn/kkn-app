import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  inputParams: any

  lists: any = [];

  // listObject = {
  //   "groupName": "any",
  //   "groupId": 0,
  //   "data": "",
  //   "isActive": true,
  //   "id": 0
  // }
  
  constructor() { }
  
  ngOnInit(){
    if(localStorage.getItem('lists')){
      let localStorageData:any = localStorage.getItem('lists');
      this.lists = JSON.parse(localStorageData);
    }
    
  }

  ngOnChanges(){
    if(this.inputParams){
      this.addTolist(this.inputParams);
    }
  }
  
  addTolist(data: any){
    let listObject = {
      "groupName": "any",
      "groupId": 0,
      "data": data,
      "isActive": true,
      "isCompleted": false,
      "id": 0
    }

    this.lists.push(listObject);
    this.setListData();
  }

  toggleIsCompleted(index:number, isCompleted: boolean){
    this.lists[index].isCompleted = !isCompleted;
    this.setListData();
  }

  removeList(index: any){
    this.lists.splice(index, 1);
    this.setListData();
  }

  setListData(){
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  confirmDeleteList(index: number){
    let text = "Are you sure want to delete this:"+this.lists[index].data+" ?";
    if (confirm(text) == true) {
      this.removeList(index);
    }
  }

  ngOnDestroy() {
  }
}
