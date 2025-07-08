import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { Observable } from 'rxjs';
import { TokenDTO } from '../../models/TokenDTO';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly API_URL = environment.API_URL;

constructor(
  private http: HttpClient,
) { }

  loginUser(login: Login) : Observable<TokenDTO> {

    let token = this.http.post<TokenDTO>(this.API_URL + '/starbank/auth/signin', login);
    token.subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
    return token;

  }


}
