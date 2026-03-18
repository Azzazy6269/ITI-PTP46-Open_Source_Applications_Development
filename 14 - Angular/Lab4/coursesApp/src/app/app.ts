import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Courses } from './components/courses/courses';
import { Order } from './components/order/order';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

//Home,Login,NotFound,Header,Footer,AboutUs,ContactUs,
@Component({
  selector: 'app-root',
  imports: [Courses,Order,Header,Footer,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursesApp');
}
