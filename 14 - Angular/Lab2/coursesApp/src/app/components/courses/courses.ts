import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { FormsModule } from '@angular/forms';
import { NgStyle, CommonModule } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click'
@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgStyle, DiscountPipe, CommonModule, AppDisableAfterClick],
  providers: [DiscountPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses {
  @Input('sentSelectedId') recievedSelectedId: number = 0;

  @Output() OnTotalPriceChanges: EventEmitter<number>

  courses: ICourse[];
  filteredCourses: ICourse[];

  totalCoursesPrice: number = 0;
  totalCoursesNumber: number = 0;
  constructor() {
    this.courses = [
      {
        id: 0,
        title: "DSA",
        instructor: "Ayman Lotfy",
        price: 3000,
        seats: 17,
        ImageUrl: "https://picsum.photos/200?random=1",
        catId: 1,
        isEnrolled: false
      },
      {
        id: 1,
        title: "HTML",
        instructor: "Mona Ali",
        price: 2500,
        seats: 9,
        ImageUrl: "https://picsum.photos/200?random=2",
        catId: 2,
        isEnrolled: false
      },
      {
        id: 2,
        title: "JavaScript",
        instructor: "Ahmed Ramadan",
        price: 2500,
        seats: 0,
        ImageUrl: "https://picsum.photos/200?radom=3",
        catId: 2,
        isEnrolled: false
      },
      {
        id: 3,
        title: "Angular",
        instructor: "Mona Soliman",
        price: 1500,
        seats: 11,
        ImageUrl: "https://picsum.photos/200?random=4",
        catId: 3,
        isEnrolled: false
      },
      {
        id: 4,
        title: "C++ & OOP pricipals",
        instructor: "Ayman Lotfy",
        price: 3000,
        seats: 2,
        ImageUrl: "https://picsum.photos/200?random=5",
        catId: 1,
        isEnrolled: false
      }
    ]

    this.filteredCourses = this.courses;

    this.OnTotalPriceChanges = new EventEmitter<number>();
  }

  ngOnChanges(): void {
    this.filteredCoursesFun();
  }

  register(courseId: number, Price: number) {
    const course = this.courses[courseId];
    if (course.seats > 0) {
      course.seats--;
      this.totalCoursesNumber++;
      course.isEnrolled = true;
      this.totalCoursesPrice += Price;
      this.OnTotalPriceChanges.emit(this.totalCoursesPrice);
    }
  }

  filteredCoursesFun() {
    if (this.recievedSelectedId == 0) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter((c) => c.catId == this.recievedSelectedId);
    }
  }
}
