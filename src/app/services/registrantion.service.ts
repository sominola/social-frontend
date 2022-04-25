import { Injectable } from '@angular/core';
import {UserRegisterDto} from "../models/auth/user-register-dto";
import {Observable} from "rxjs";
import {HttpInternalService} from "./http-internal.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private routePrefix: string = '/api';
  constructor(private http:HttpInternalService) {}


  public register(user: UserRegisterDto):Observable<any> {
     return this.http.postFullRequest(this.routePrefix+'/signup',user);
  }


  public removeTokensFromStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  public areTokensExist() {
    return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');
  }

}
