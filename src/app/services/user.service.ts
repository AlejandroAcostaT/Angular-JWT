import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, UserList } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(page?: number): Observable<UserList>{
    let url = environment.api_url+'/users';
    if(page){
      url += '?page='+page;
    }
    return this.http.get<UserList>(url);
  }
}
