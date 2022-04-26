import { Injectable } from '@angular/core';
import {HttpInternalService} from "./http-internal.service";
import {TokenDto} from "../models/token/token-dto";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private httpService: HttpInternalService) {}


  public areTokensExist():boolean {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    return accessToken != null && refreshToken!=null;
  }

  IsAuthorized(): boolean{
    return this.areTokensExist();
  }

  public refreshTokens() {
    // return this.httpService.postRequest<AccessTokenDTO>(`token/refresh`, {
    //   accessToken: JSON.parse(localStorage.getItem('accessToken')),
    //   refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
    // })
    //   .pipe(
    //     map(token => {
    //       this._setTokens(token.body);
    //       return token.body;
    //     }));
  }

  public getAccessToken():string|null {
      return localStorage.getItem('accessToken');
  }

  public setTokens(tokens: TokenDto) {
    if (tokens) {
      localStorage.setItem('accessToken', JSON.stringify(tokens.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(tokens.refreshToken));
    }
  }
  public removeTokensFromStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
  public revokeTokens():void {
    if (this.areTokensExist()){
       this.httpService.postRequest<TokenDto>(`token/revoke`, {
        refreshToken: JSON.parse(localStorage.getItem('refreshToken')!).subscribe()
      });
    }
  }

}
