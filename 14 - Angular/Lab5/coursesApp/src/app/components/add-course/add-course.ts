import { Component, inject } from '@angular/core';
import { CategoriesApi } from '../../services/categories-api'
import { Observable } from 'rxjs';
import { ICategory } from '../../models/icategory';
import { AsyncPipe } from '@angular/common';
import { ICourse } from '../../models/icourse';
import { FormsModule, NgModel } from '@angular/forms';
import { CoursesApi } from '../../services/courses-api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-course',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {
  private categoriesService = inject(CategoriesApi)
  categories$:Observable<ICategory[]> = this.categoriesService.getAllCateogories();
  private coursesService = inject(CoursesApi)
  private router = inject(Router)
  course:ICourse = {} as ICourse 

  addNewCourse(){
    this.coursesService.addNewCourse(this.course).subscribe({
      next:(res)=>{
        console.log(res);
      this.router.navigateByUrl("/courses")
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
