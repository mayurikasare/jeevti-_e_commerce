import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import  {Observable} from 'rxjs'
import { SellerService } from './services/seller.service';
export const authGuard:CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let _service=inject(SellerService);

  // isSellerLoggedIn=localStorage.getItem('seller');
  // if(isSellerLoggedIn=='false'){
  //    alert("not authenticated user ")
  //    return false;
  //    _router.navigate(['seller-home']);
  // }


  // if (SellerService.isSellerLoggedIn) {
  //   return true;
  // } else {
  //   // Redirect to the login page or another route as needed
  //   _router.navigate(['seller-home']);
  //   return false;
  // }

  // if(localStorage.getItem('seller'))
  return true;


   //return this.SellerService.isSellerLoggedIn;
};

