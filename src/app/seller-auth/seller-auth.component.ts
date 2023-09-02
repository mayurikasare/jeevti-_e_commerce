import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SighUp, login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent  implements OnInit{

  user=new User();
  constructor(private seller:SellerService ,private router:Router){}
  showLogin=false;
 authError:string='';
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  //sigh-up
  SighUp(data:SighUp){
    console.log(data)
    this.seller.userSighUp(data);
    alert("succesful sigh up");
    //this.router.navigate([])
 } 
 //sigh-in
 sellerLogin(data:SighUp){
  this.authError="";
  this.seller.userLogin(data);
  this.seller.isLoginerror.subscribe((isError)=>{
    if(isError){
      this.authError="Email or Password is not correct";
    }
  })
 }
 //toggle-link
 OpenLogin() {
  this.showLogin=true;
  }
  //toggle-link
  OpenSighUp(){
    this.showLogin=false;

  }
}
