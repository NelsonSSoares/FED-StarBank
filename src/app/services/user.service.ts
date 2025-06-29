import { UserRequest } from './../models/userRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  createUser(user: UserRequest): Observable<UserRequest> {
    return this.http.post<UserRequest>(this.API_URL+'/starbank/register', user);
  }

  loginUser(user: UserRequest) {
  }
}
