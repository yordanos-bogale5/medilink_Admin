import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  recent_activities = [
    {recent1 : 'John Doe was admitted for surgery.'},
    {recent2 : 'Dr. Smith completed a successful operation.'},
    {recent3 : 'Nurse Mary assisted in ICU.'},
    {recent4 : 'New appointment scheduled for patient Jane Doe.'},
    {recent5 : 'John Doe was admitted for surgery.'},
    {recent6 : '$1,200 revenue generated from recent treatments.'}
  ]
}
