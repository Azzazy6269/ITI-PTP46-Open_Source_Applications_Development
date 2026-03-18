import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Courses } from './components/courses/courses';
import { Order } from './components/order/order';

@Component({
  selector: 'app-root',
  imports: [Courses,Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursesApp');
}
