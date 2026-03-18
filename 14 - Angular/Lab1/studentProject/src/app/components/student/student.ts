import { Component } from "@angular/core";
import { Istudent } from "../../models/istudent";

@Component({
    selector: "app-student",
    standalone: false,
    templateUrl: "./student.html",
    styleUrl: "./student.css"
})


export class student {
    student: Istudent;

    constructor() {
        this.student = {
            id: 254,
            name: 'osama',
            age: 25,
            photoUrl: "https://ng-bootstrap.github.io/img/logo-stack.svg"
        }

    }
}