import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products, Product } from '../shared/models/product.model';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.apiUrl;
  private API :string = 'http://localhost:5000/api/v1/product';
  public product: Observable<any>;

  constructor(private http: HttpClient, private _api: ApiService) {}

  getAllProducts(limitOfResults = 9, page): Observable<Products> {
    return this.http.get<Products>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString(),
        page: page,
      },
    });
  }
  getSingleProduct(id: Number): Observable<any> {
    console.log(id);
    return this._api.getTypeRequest('products/' + id);
  }
  getAllProductsAdmin(): Observable<Products> {
    return this.http.get<Products>(this.url + 'products', {
    });
  }
  delete(id:number) :Observable<any>{
    return this.http.delete<any>(this.url +'products/' + id);
  }

  createProduct(obj): Observable<Products> {
    console.log(obj);
    return this.http.post<Products>(this.url +'products/addProduct',obj);
  }
} 