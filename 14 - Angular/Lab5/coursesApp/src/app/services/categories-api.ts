import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApi {

  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.baseUrl}/categories`;

  getAllCateogories():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(this.apiUrl);
  }

}
