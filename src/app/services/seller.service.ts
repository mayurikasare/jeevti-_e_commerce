import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../user';
import { SighUp, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
   isSellerLoggedIn=new BehaviorSubject<boolean>(false)
   isLoginerror=new EventEmitter<boolean>(false)  //if unsuccessful login 
  constructor(private http:HttpClient,private router:Router) { }

public userSighUp(data:SighUp){
    this.http.post("http://localhost:3000/seller",
    data,{observe:'response'}).
    subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      //to store data in localstorage
  
    });
  }
reloadSeller(){
  if(localStorage.getItem('seller')){
    this.isSellerLoggedIn.next(true);
    this.router.navigate(['seller-home'])
  }
}

userLogin(data:login){
console.log(data);
this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`
 ,{observe:'response'}).subscribe((result:any)=>{
   console.log(result)
   if(result && result.body && result.body.length){
    alert("Login Success");
    this.router.navigate(['seller-home'])
  }
    else
      alert("unsuccesfully Login");
    this.isLoginerror.emit(true)    
   })
 }
}
