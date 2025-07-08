import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = this.authService.getAccessToken();
    if (token) {
      return true; // usuário autenticado, deixa passar
    } else {
      // redireciona para login se não autenticado
      return this.router.createUrlTree(['/login']);
    }
  }
}
