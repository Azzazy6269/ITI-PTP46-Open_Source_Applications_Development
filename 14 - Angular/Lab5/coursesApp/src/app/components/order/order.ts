import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';
import { ICategory } from '../../models/icategory';
import { CategoriesApi } from '../../services/categories-api'
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule,Courses,AsyncPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})

export class Order {
  selectedId:number=0;
  totalCoursesPrice:number=0;
  //categories : ICategory[];
  private apiCategoriesService = inject(CategoriesApi);
  categories$ :Observable<ICategory[]>=this.apiCategoriesService.getAllCateogories()
  constructor() {
     
  }
 
  setOrderPrice(newOrderPrice:number){
    this.totalCoursesPrice = newOrderPrice;
  }

}
