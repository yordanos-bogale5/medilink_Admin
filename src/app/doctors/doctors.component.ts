import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors = [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiology', contact: '123-456-7890' },
    { id: 2, name: 'Dr. Lee', specialization: 'Dermatology', contact: '123-456-7891' },
    { id: 3, name: 'Dr. Brown', specialization: 'Neurology', contact: '123-456-7892' },
    { id: 4, name: 'Dr. Wilson', specialization: 'Pediatrics', contact: '123-456-7893' }
  ];

  searchQuery: string = ''; // Search query for filtering by patient name or gender

  constructor() {}

  ngOnInit(): void {}

  // Filter doctors based on search query (patient name or gender)
  getFilteredDoctors() {
    const query = this.searchQuery.toLowerCase();
    return this.doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialization.toLowerCase().includes(query) ||
      doctor.contact.toLowerCase().includes(query)
    );
  }
}
