import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-order',
  imports: [FormsModule,Courses],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedId:number=0;
  categories: ICategory[];
  totalCoursesPrice:number=0;
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
 
  setOrderPrice(newOrderPrice:number){
    this.totalCoursesPrice = newOrderPrice;
  }

}
