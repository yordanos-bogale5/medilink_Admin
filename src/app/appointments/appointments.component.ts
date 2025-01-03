import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments = [
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', appointmentDate: '2024-12-21', status: 'Pending' },
    { id: 2, patientName: 'Jane Doe', doctorName: 'Dr. Lee', appointmentDate: '2024-12-22', status: 'Confirmed' },
    { id: 3, patientName: 'Michael Johnson', doctorName: 'Dr. Brown', appointmentDate: '2024-12-23', status: 'Cancelled' },
    { id: 4, patientName: 'Emily Davis', doctorName: 'Dr. Wilson', appointmentDate: '2024-12-24', status: 'Pending' }
  ];

  searchQuery: string = ''; // Search query for filtering appointments

  constructor() {}

  ngOnInit(): void {}

  // Update the status of an appointment
  updateStatus(appointment: any): void {
    const statusOptions = ['Pending', 'Confirmed', 'Cancelled'];
    const currentIndex = statusOptions.indexOf(appointment.status);
    const nextStatus = statusOptions[(currentIndex + 1) % statusOptions.length]; // Loop through status options
    appointment.status = nextStatus;
  }

  // Cancel the appointment
  cancelAppointment(appointment: any): void {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      const index = this.appointments.indexOf(appointment);
      if (index !== -1) {
        this.appointments.splice(index, 1); // Remove the appointment from the list
      }
    }
  }

  // Filter appointments based on search query
  getFilteredAppointments() {
    const query = this.searchQuery.toLowerCase();
    return this.appointments.filter(appointment =>
      appointment.patientName.toLowerCase().includes(query) ||
      appointment.doctorName.toLowerCase().includes(query)
    );
  }
}
