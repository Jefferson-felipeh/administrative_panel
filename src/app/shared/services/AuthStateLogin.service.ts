import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthStateLogin{
    private userSubject = new BehaviorSubject<string | null>(null);
    user$ = this.userSubject.asObservable();

    constructor(){
        const saveStorage = localStorage.getItem('token');//Criar um registro no locastorage;
        if(saveStorage) this.userSubject.next(saveStorage);
    }

    setUser(token:string){
        localStorage.setItem('token',token);//Salva os dados nesse registro;
        this.userSubject.next(token);
    }

    getUser(): string | null{
        return this.userSubject.value;
    }

    clearuser(){
        localStorage.removeItem('token');//Apaga os dados do localstorage referente a esse registro;
        this.userSubject.next(null);
    }
}