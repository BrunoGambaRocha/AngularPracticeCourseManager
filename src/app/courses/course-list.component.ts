import { Component, OnInit } from "@angular/core";
import { Course } from "./courses";

@Component({
    selector: 'app-course-list',
    //template: '<h2>Course List - propriedade template - aqui não é uma boa prática de independência</h2>',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit  {

    imgPath: string = './assets/images/forms.png';
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular 8',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'ANG-8',
                duration: 120,
                rating: 4.8,
                releaseDate: 'August, 14, 2021'
            },
            {
                id: 2,
                name: 'HTML 5',
                imageUrl: './assets/images/http.png',
                price: 49.99,
                code: 'HTML-5',
                duration: 50,
                rating: 4.0,
                releaseDate: 'January, 11, 1982'
            }
        ]
    }

}