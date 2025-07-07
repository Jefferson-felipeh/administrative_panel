import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.status === 401 || error.status === 403){
        router.navigate(['/']);
        localStorage.removeItem('token');
      }
      return throwError(() => error);
    })
  );
};
