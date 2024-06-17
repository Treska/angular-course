import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input() 
  course:Course;
  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed(){
    console.log("card component - button clicked ...");

    this.courseSelected.emit(this.course);

  }
}
