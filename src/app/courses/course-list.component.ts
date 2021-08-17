import { Course } from "./courses";
import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit  {
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    
    _filterBy: string = '';

    constructor(private courseService: CourseService) { };

    ngOnInit(): void {

        this._courses = this.courseService.retrieveAll();
        this.filteredCourses =  this._courses;

        /* 
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
        */ 
    }

    set filter(value: string) { 
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() { 
        return this._filterBy;
        
    }    

}