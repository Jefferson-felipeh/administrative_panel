import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(
        private http:HttpClient,
        private router:Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean> {
        console.log('👩‍💻Executando Guard!');

        const path = state.url;
        console.log(path);

        return this.http.get('http://localhost:3030/users/validate',{withCredentials: true}).pipe(
            map(() => true),
            catchError(() => {
                this.router.navigate(['/']);
                return of(false);
            })
        );
    }
}