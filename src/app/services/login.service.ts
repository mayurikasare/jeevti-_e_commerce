import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private httpClient: HttpClient)
   { }
  public loginUserFromRemote(user :User): Observable<any> 
  {
    return  this.httpClient.post("http://localhost:8080/login",user);
  
  }

}
