import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
    { id: 3, name: 'Michael Johnson', age: 35, gender: 'Male' },
    { id: 4, name: 'Emily Davis', age: 28, gender: 'Female' }
  ];

  searchQuery: string = ''; // Search query for filtering patients

  constructor() {}

  ngOnInit(): void {}

  // Filter patients based on name or gender
  getFilteredPatients() {
    const query = this.searchQuery.toLowerCase();
    return this.patients.filter(patient =>
      patient.name.toLowerCase().includes(query) ||
      patient.gender.toLowerCase().includes(query)
    );
  }
}
