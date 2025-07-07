import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserModel } from "../../models/user";

@Injectable({ providedIn: 'root' })
export class FindUserService {
    private userSubject = new BehaviorSubject<UserModel | null>(null);
    profile$ = this.userSubject.asObservable();

    setProfile = (profile: UserModel) => this.userSubject.next(profile);

    getMenu(): UserModel | null {
        return this.userSubject.value;
    }

    clearProfile = () => this.userSubject.next(null);
}