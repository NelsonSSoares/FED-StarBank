import { UserRequest } from './../models/userRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  createUser(user: UserRequest): Observable<UserRequest> {
    return this.http.post<UserRequest>('http://localhost:8765/starbank/register', user);
  }

  loginUser(user: UserRequest) {
  }
}
