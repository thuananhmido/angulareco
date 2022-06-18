import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products, Product } from '../shared/models/product.model';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient, private _api: ApiService) {}

  getCategory(): Observable<Products> {
    return this.http.get<Products>(this.url + 'categories', {
    });
  }

  getAllProductsByCatId(id_cat:any): Observable<Products> {
    return this.http.get<Products>(this.url + 'categories/'+id_cat);
  }
}
