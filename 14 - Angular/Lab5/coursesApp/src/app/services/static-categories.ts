import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class StaticCategories {
  categories: ICategory[];
    constructor(){
     this.categories = [
      {
        id: 1,
        name: "software fundamentals"
      },
      {
        id: 2,
        name: "client side technologies"
      },
      {
        id: 3,
        name: "front-end frameworks"
      },
    ];
  }

  getAllCategories(): ICategory[]{
    return this.categories;
  }
}
