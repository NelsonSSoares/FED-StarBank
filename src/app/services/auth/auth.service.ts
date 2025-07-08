import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { map, Observable } from 'rxjs';
import { TokenDTO } from '../../models/TokenDTO';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = environment.API_URL;
  private readonly ACCESS_TOKEN_KEY = 'accessToken';
  private readonly REFRESH_TOKEN_KEY = 'refreshToken';

  constructor(
    private http: HttpClient,
  ) { }


  loginUser(login: Login): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(this.API_URL + '/starbank/auth/signin', login, { observe: 'response' })
      .pipe(map(resp => resp.body!));
  }

  setTokens(token: TokenDTO): void {
  localStorage.setItem(this.ACCESS_TOKEN_KEY, token.accessToken);
  localStorage.setItem(this.REFRESH_TOKEN_KEY, token.refreshToken);
}


  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  clearTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken(); // retorna true se token existe
  }

}
