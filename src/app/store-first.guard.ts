import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class StoreFirstGuard  {
  
  private firstNavigation = true;

  constructor(private router:Router) {}


  /*The implementation of this method uses the context objects that Angular provides that describe the
  route that is about to be navigated to and checks to see whether the target component is a HomePageComponent.
  If this is the first time that the canActivate method has been called and a different component is about to be
  used, then the Router.navigateByUrl method is used to navigate to the root URL.*/

  canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot):boolean{
 
     if(this.firstNavigation){
        this.firstNavigation = false;
        if(route.component != HomePageComponent){
            this.router.navigateByUrl('/');
            return false;
        }
     }

     return true;
  }
}
