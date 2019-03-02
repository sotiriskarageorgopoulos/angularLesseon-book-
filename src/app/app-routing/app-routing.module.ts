import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { StoreFirstGuard } from '../store-first.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers:[ StoreFirstGuard ],
  exports:[ RouterModule ]
  
})
export class AppRoutingModule { }
