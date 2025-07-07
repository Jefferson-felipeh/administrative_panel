import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of, tap } from "rxjs";
import { HomeService } from "../../modules/home/home.service";

@Injectable({providedIn: 'root'})
export class PermisisonResolver implements Resolve<boolean>{
    constructor(private homeService:HomeService, private router:Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
        return this.homeService.getAll().pipe(
            tap(() => {}),
            catchError(() => {
                this.router.navigate(['/']);
                return of(false);
            })
        )
    }
}