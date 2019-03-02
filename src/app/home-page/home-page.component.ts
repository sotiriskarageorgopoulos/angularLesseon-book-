import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/model/product.repository';
import { Product } from 'src/model/product.model';
import { Cart } from 'src/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
  }

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;
 
  constructor(private repository:ProductRepository,
              private cart:Cart,
              private router:Router){}

  get products():Product[]{
  
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
   
    return this.repository.getProducts(this.selectedCategory)
           .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage:number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize:number){
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage))
           .fill(0).map((x,i)=> i + 1);
  }
  
  get pageCount(): number{
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage);
  }

  addProductToCart(product:Product){
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
}


