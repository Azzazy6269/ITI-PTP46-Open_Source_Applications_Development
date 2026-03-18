import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StaticCourses} from '../../services/static-courses'
import { ICourse } from '../../models/icourse';
import { NgStyle } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-course-details',
  imports: [NgStyle,DiscountPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  private activatedRoutes=inject(ActivatedRoute);
  private courseId:number=0;
  private staticCoursesService = inject(StaticCourses);
  public course:ICourse|null ={}as ICourse;
  ngOnInit(): void {
    this.courseId=Number(this.activatedRoutes.snapshot.params['id']);
    this.course=this.staticCoursesService.getCourseByID(this.courseId)
  }
}
