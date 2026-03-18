import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { FormsModule } from '@angular/forms';
import { NgStyle, CommonModule } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click'
import {StaticCourses} from '../../services/static-courses'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgStyle, DiscountPipe, CommonModule, AppDisableAfterClick,RouterLink],
  providers: [DiscountPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses {
  @Input('sentSelectedId') recievedSelectedId: number = 0;

  @Output() OnTotalPriceChanges: EventEmitter<number>

  private staticCoursesService = inject(StaticCourses);
  filteredCourses: ICourse[];

  totalCoursesPrice: number = 0;
  totalCoursesNumber: number = 0;
  constructor() {
    this.filteredCourses = this.staticCoursesService.getCoursesByCatId(this.recievedSelectedId);
    this.OnTotalPriceChanges = new EventEmitter<number>();
  }

  ngOnChanges(): void {
    this.filteredCourses = this.staticCoursesService.getCoursesByCatId(this.recievedSelectedId);
  }

  register(courseId: number, Price: number) {
    if (this.staticCoursesService.courses[courseId].seats > 0) {
      this.staticCoursesService.courses[courseId].seats--;
      this.staticCoursesService.courses[courseId].isEnrolled=true;
      this.totalCoursesNumber++;
      this.totalCoursesPrice += Price;
      this.OnTotalPriceChanges.emit(this.totalCoursesPrice);
    }
  }

  getCourseByID(courseID:number){
    this.staticCoursesService.getCourseByID(courseID);
  } 
}
