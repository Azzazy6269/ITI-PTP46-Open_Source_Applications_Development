import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { FormsModule } from '@angular/forms';
import { NgStyle, CommonModule, AsyncPipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click'
import { CoursesApi } from '../../services/courses-api'
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgStyle, DiscountPipe, CommonModule, AppDisableAfterClick, RouterLink, AsyncPipe],
  providers: [DiscountPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})

export class Courses implements OnInit {
  @Input('sentSelectedId') recievedSelectedId: number = 0;

  @Output() OnTotalPriceChanges: EventEmitter<number>

  private apiCoursesService = inject(CoursesApi);
  filteredCourses: ICourse[] = [];
  courses$!: Observable<ICourse[]>;

  totalCoursesPrice: number = 0;
  totalCoursesNumber: number = 0;
  constructor() {
    this.OnTotalPriceChanges = new EventEmitter<number>();
    this.courses$ = this.apiCoursesService.getAllCourses();
  }
  ngOnInit(): void {
    if(this.recievedSelectedId==0){
      this.apiCoursesService.getAllCourses().subscribe((res) => {
      this.filteredCourses = res;
    });
    }
    
  }

  ngOnChanges(): void {
    /*this.apiCoursesService.getCoursesByCatId(this.recievedSelectedId.toString()).subscribe((res) => {
      this.filteredCourses = res
    });*/
    if (this.recievedSelectedId && this.recievedSelectedId != 0) {
      this.courses$ = this.apiCoursesService.getCoursesByCatId(this.recievedSelectedId.toString());
    } else {
      this.courses$ = this.apiCoursesService.getAllCourses();
    }
  }

  register(courseId: number, Price: number) {
    let course: ICourse;
    this.apiCoursesService.getCourseByID(courseId.toString()).subscribe((res) => {
      course = res;
      if (course.seats > 0) {
        course.seats--;
        course.isEnrolled = true;
        this.apiCoursesService.updateCourseById(courseId.toString(), course).subscribe(() => {
          this.apiCoursesService.getAllCourses().subscribe((res) => {
            this.filteredCourses = res;
          });
        });
        this.totalCoursesNumber++;
        this.totalCoursesPrice += Price;
        this.OnTotalPriceChanges.emit(this.totalCoursesPrice);
      }
    });
  }

  getCourseByID(courseID: number) {
    this.apiCoursesService.getCourseByID(courseID.toString());
  }
}
