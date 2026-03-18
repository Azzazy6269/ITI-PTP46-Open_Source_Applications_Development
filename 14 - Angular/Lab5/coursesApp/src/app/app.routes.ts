import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { Order } from './components/order/order';
import { Login } from './components/login/login';
import { CourseDetails } from './components/course-details/course-details';
import { AppLayout } from './components/app-layout/app-layout';
import { AddCourse } from './components/add-course/add-course';

export const routes: Routes = [
    {
        //,
        path:'',component:AppLayout,
        children: [
            { path: 'home', component: Home, title: 'Courses app' },
            { path: 'add-course', component: AddCourse, title: 'add course' },
            { path: 'courses', component: Order, title: 'Courses' },
            { path: 'aboutUs', component: AboutUs, title: 'About us' },
            { path: 'contactUs', component: ContactUs, title: 'Contact us' },
            { path: 'details/:id', component: CourseDetails, title: 'Course details'},
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    
    { path: 'login', component: Login, title: 'Login' },
    { path: '**', component: NotFound }
];
