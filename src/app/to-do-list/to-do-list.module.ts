import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from './creation/creation.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { AppModule } from '../app.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreationComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    FormsModule
  ],
  exports: [
    CreationComponent
  ]
})
export class ToDoListModule { }
