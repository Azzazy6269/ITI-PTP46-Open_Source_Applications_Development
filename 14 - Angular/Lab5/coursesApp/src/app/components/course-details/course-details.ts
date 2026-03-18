import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../../models/icourse';
import { AsyncPipe, NgStyle } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { Observable } from 'rxjs';
import {CoursesApi} from '../../services/courses-api'


@Component({
  selector: 'app-course-details',
  imports: [NgStyle,DiscountPipe,AsyncPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  private activatedRoutes=inject(ActivatedRoute);
  private courseId:number=0;
  private apiCoursesService = inject(CoursesApi);
  course$:Observable<ICourse>={}as Observable<ICourse>;
  ngOnInit(): void {
    this.courseId=Number(this.activatedRoutes.snapshot.params['id']);
    this.course$= this.apiCoursesService.getCourseByID(this.courseId.toString())
  }
}
