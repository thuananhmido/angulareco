import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CategoriesService } from '../services/categories.service';
import { ProductService } from '../services/product.service';
import { Categories } from '../shared/models/categories.model';
import { Products, Product } from '../shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  categories: Categories[] = [];
  loading = false;
  productPageCounter = 1;
  additionalLoading = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cateService :CategoriesService
  ) {}

  public screenWidth: any;
  public screenHeight: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.loading = true;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 500);
    this.getCategory();
   
  }

  getCategory(){
    this.cateService.getCategory().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showMoreProducts(): void {
    this.additionalLoading = true;
    this.productPageCounter = this.productPageCounter + 1;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = [...this.products, ...res];
          this.additionalLoading = false;
        },
        (err) => {
          console.log(err);
          this.additionalLoading = false;
        }
      );
    }, 500);
  }

}
