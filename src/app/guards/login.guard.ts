import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token.service";
import {SnackBarService} from "../services/snack-bar.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private snackBarService: SnackBarService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuthorized =  this.tokenService.IsAuthorized()
      if(isAuthorized){
        return isAuthorized;
      }
      else{
        this.snackBarService.showDanger("Please log in. Access denied!");
        this.router.navigate(['/login']);
        return isAuthorized;
      }
  }
}
