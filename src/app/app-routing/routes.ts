import { Routes } from '@angular/router';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { HomePageComponent  } from '../home-page/home-page.component';
import { StoreFirstGuard } from '../store-first.guard';

export const  routes : Routes = [
{ path: 'store' , component:HomePageComponent , canActivate: [StoreFirstGuard] },
{ path: 'cart' , component: CartDetailComponent , canActivate: [StoreFirstGuard]},
{ path: 'checkout', component: CheckoutComponent , canActivate: [StoreFirstGuard]},
{ path:'**',redirectTo:"/store"}
];