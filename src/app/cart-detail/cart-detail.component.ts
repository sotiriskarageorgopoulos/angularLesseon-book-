import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(private cart:Cart) { }

  ngOnInit() {
  }

}
