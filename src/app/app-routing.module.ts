import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page404Component } from './shared/component/page404/page404.component';
import { CreationComponent } from './to-do-list/creation/creation.component';

const routes: Routes = [
  { 
    path: '',
    // component: AppComponent,
    children: [
      {
        path: 'to-do-list',
        loadChildren: () => import('./to-do-list/to-do-list.module').then(m => m.ToDoListModule)
      },
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
