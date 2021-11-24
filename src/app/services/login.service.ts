import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Auth, LoginForm } from '../interfaces/auth.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(data:LoginForm): Observable<Auth>{
    let url = environment.api_url+'/login';

    return this.http.post<Auth>(url, data);
  }
}
