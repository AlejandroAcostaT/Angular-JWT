import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/interfaces/pagination.interface';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = [];
  pages: Pagination = { page: 1, total_pages: 1};

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(page?:number) {
    this.userService.getUsers(page).subscribe((response) => {
      this.users = response.data;
      this.pages = { page: response.page, total_pages: response.total_pages }
    })
  }

}
