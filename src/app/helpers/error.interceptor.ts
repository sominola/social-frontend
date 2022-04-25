import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response) => {
        let handled: boolean = false;

        if (response instanceof HttpErrorResponse) {
          if (!(response.error instanceof ErrorEvent)) {
            switch (response.status) {
              case 401:
                break;
            }
          }
        }

        if(handled) {
          return of(response);
        }
        else {
          return throwError(()=>response);
        }
      })
    );
  }
}
