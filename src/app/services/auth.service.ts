import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {HttpInternalService} from "./http-internal.service";
import {UserRegisterDto} from "../models/auth/user-register-dto";
import {UserLoginDto} from "../models/auth/user-login-dto";
import {TokenDto} from "../models/token/token-dto";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private routePrefix:string = '/api'
  constructor(private tokenService: TokenService,
              private httpService: HttpInternalService,
              private httpClient: HttpClient,
              private router: Router) {}

  public register(user: UserRegisterDto):Observable<UserRegisterDto> {
    return this.httpService.postRequest<UserRegisterDto>(this.routePrefix+"/signup",user);
  }

  public login(user: UserLoginDto):Observable<TokenDto> {
    return this.httpService.postRequest<TokenDto>(this.routePrefix+"/signin", user)
      .pipe(map(response=>{
        this.tokenService.setTokens(response)
      return response;
      }));
  }

  IsAuthorized(): boolean{
    return this.tokenService.areTokensExist();
  }

  public logout() {
    this.tokenService.revokeTokens();
    this.tokenService.removeTokensFromStorage();
    this.router.navigate(['']);
  }

}
