import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Token expirado o no autorizado, redirigir a login
            this.router.navigate(['/login']);
          }
          return throwError(error);
        })
      );
    }

    return next.handle(req);
  }
}
