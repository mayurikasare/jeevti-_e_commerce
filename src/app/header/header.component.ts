import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  menuType:string='default';
  
  sellerName:string='';
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{  //not working properly
      if(val.url){
        //  console.warn(val.url)
        if(localStorage.getItem('seller') && 
        val.url.includes('seller'))
        {
          console.log("in seller area");
          this.menuType="seller"
          //log out
          if(localStorage.getItem('seller')){
          let sellerStore=localStorage.getItem('seller');
          let sellerData=sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;
          }
        }
        else{  
          this.menuType='default'
        }
      }
    })
  }
  //
logout(){
  localStorage.removeItem('seller')
  this.router.navigate(['/'])
  }
}
