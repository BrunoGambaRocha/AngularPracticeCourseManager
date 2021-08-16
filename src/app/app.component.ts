import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-manager';

  nameFirst: string = 'Bruno';
  nameLast: string = 'Rocha';
}
