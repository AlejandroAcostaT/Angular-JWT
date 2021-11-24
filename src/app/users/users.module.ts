import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListItemComponent } from './users-list-item/users-list-item.component';
import { UsersListComponent } from './users-list/users-list.component';

import { PaginationComponent } from '../components/pagination/pagination.component';


@NgModule({
  declarations: [
    UsersListItemComponent,
    UsersListComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class UsersModule { }
