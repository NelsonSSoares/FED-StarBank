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

  constructor(
    private http: HttpClient,
  ) { }
  loginUser(login: Login): Observable<TokenDTO> {
  return this.http.post<TokenDTO>(this.API_URL + '/starbank/auth/signin', login, { observe: 'response' })
    .pipe(map(resp => resp.body!));
}


}
