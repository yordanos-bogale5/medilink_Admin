import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
})
export class AppointmentsComponent {
  // appointment
  openDoctor: boolean = true;
  openPatient: boolean = false;

  appointmentsData = {
    doctors: [
      {
        doctorId: 1,
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        appointments: [
          {
            appointmentId: 101,
            patientName: 'Alice Smith',
            date: '2024-12-15',
            time: '10:00 AM',
            status: 'Confirmed', // or 'Pending', 'Cancelled'
            patientContact: '555-1234',
            patientEmail: 'alice@example.com',
          },
          {
            appointmentId: 102,
            patientName: 'Bob Johnson',
            date: '2024-12-16',
            time: '11:30 AM',
            status: 'Pending',
            patientContact: '555-5678',
            patientEmail: 'bob@example.com',
          },
        ],
      },
      {
        doctorId: 2,
        name: 'Dr. Jane Smith',
        specialty: 'Dermatologist',
        appointments: [
          {
            appointmentId: 103,
            patientName: 'Charlie Brown',
            date: '2024-12-17',
            time: '02:00 PM',
            status: 'Confirmed',
            patientContact: '555-8765',
            patientEmail: 'charlie@example.com',
          },
          {
            appointmentId: 104,
            patientName: 'Diana Green',
            date: '2024-12-18',
            time: '09:30 AM',
            status: 'Cancelled',
            patientContact: '555-4321',
            patientEmail: 'diana@example.com',
          },
        ],
      },
    ],

    patients: [
      {
        patientId: 1,
        name: 'Alice Smith',
        appointments: [
          {
            appointmentId: 101,
            doctorName: 'Dr. John Doe',
            specialty: 'Cardiologist',
            date: '2024-12-15',
            time: '10:00 AM',
            status: 'Confirmed',
          },
          {
            appointmentId: 105,
            doctorName: 'Dr. Jane Smith',
            specialty: 'Dermatologist',
            date: '2024-12-20',
            time: '03:00 PM',
            status: 'Pending',
          },
        ],
      },
      {
        patientId: 2,
        name: 'Bob Johnson',
        appointments: [
          {
            appointmentId: 102,
            doctorName: 'Dr. John Doe',
            specialty: 'Cardiologist',
            date: '2024-12-16',
            time: '11:30 AM',
            status: 'Pending',
          },
        ],
      },
      {
        patientId: 3,
        name: 'Charlie Brown',
        appointments: [
          {
            appointmentId: 103,
            doctorName: 'Dr. Jane Smith',
            specialty: 'Dermatologist',
            date: '2024-12-17',
            time: '02:00 PM',
            status: 'Confirmed',
          },
        ],
      },
    ],
  };

  //Conditional rendering for patient and doctor appointments
  onDoc() {
    this.openDoctor = true;
    this.openPatient = false;
  }

  onPat() {
    this.openDoctor = false;
    this.openPatient = true;
  }
}
