import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataForm } from "../../models/dataFormLogin";
import { Observable } from "rxjs";
import { LoginUserModel } from "../../models/signIn";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  signIn(dataSignIn: DataForm): Observable<object> {
    if (!dataSignIn.email || !dataSignIn.password) throw new Error();

    //Como o HttpClient retorna uma observabel, eu preciso me inscrever nessa observabel_
    return this.http.post('http://localhost:3031/auth/login', dataSignIn);

  }
}