import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  msg='';
  user=new User();

  constructor(private service : LoginService, private rout:Router) 
  { 
  }
  ngOnInit(): void 
  {
  }

  loginUser()
  {

this.service.loginUserFromRemote(this.user).subscribe(
// if data retrived success
  data =>
  {
    this.msg="Your Credintials are Correct"
    console.log("responce recived");
  this.rout.navigate(['/loginsuccess'])
  },
  

  // if data retrived failures
  error=>
  {
   console.log("exception occured");
  this.msg="Bad Credentials please enter valid EmailId and password";
  
  })
}
gores()
{
  console.log("hi hello");
  this.rout.navigate(['/regs'])
}
}
