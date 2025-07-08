import { UserRequest } from '../../models/userRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../../models/login';
import { TokenDTO } from '../../models/TokenDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  createUser(user: UserRequest): Observable<UserRequest> {
    return this.http.post<UserRequest>(this.API_URL + '/starbank/auth/signup', user);
  }

  getUserByEmail(email: string): Observable<UserRequest> {
    return this.http.get<UserRequest>(`${this.API_URL}/starbank/users/email/${email}`);
  }

}
