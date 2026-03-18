import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICourse } from '../models/icourse';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesApi {

  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.baseUrl}/courses`;
  
  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.apiUrl);
  }

  getCoursesByCatId(catId: string): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.apiUrl}?catId=${catId}`);
  }

  getCourseByID(courseID: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.apiUrl}/${courseID}`);
  }

  addNewCourse(course:ICourse):Observable<ICourse>{
    return this.httpClient.post<ICourse>(this.apiUrl,JSON.stringify(course))
  }

  updateCourseById(courseId:string,data:ICourse):Observable<ICourse>{
    return this.httpClient.put<ICourse>(`${this.apiUrl}/${courseId}`,data)
  }

}
