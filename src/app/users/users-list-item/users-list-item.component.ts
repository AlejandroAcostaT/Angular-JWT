import { Component, Input, OnInit } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.css']
})

export class UsersListItemComponent implements OnInit {

  @Input() user:User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}

interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
};

