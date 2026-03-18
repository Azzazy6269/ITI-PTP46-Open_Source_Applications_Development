import { Injectable } from '@angular/core';
import { ICourse } from '../models/icourse';


@Injectable({
  providedIn: 'root',
})
export class StaticCourses {
  courses: ICourse[];
  constructor(){
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

  }

  getCoursesByCatId(catId:number):ICourse[]{
    if (catId == 0) {
      return this.courses;
    } else {
      return this.courses.filter((c) => c.catId == catId);
    }
  }

  getCourseByID(courseID:number): ICourse|null{
    if(courseID>=this.courses.length) return null;
    return this.courses[courseID];
  }
}
