import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';
import { ICategory } from '../../models/icategory';
import { StaticCategories } from '../../services/static-categories'

@Component({
  selector: 'app-order',
  imports: [FormsModule,Courses],
  templateUrl: './order.html',
  styleUrl: './order.css',
})

export class Order {
  selectedId:number=0;
  totalCoursesPrice:number=0;
  categories : ICategory[];
  private staticCategoriesService = inject(StaticCategories);
  constructor() {
    this.categories = this.staticCategoriesService.getAllCategories();
  }
 
  setOrderPrice(newOrderPrice:number){
    this.totalCoursesPrice = newOrderPrice;
  }

}
