import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  openDoctor: boolean = true;
  openPatient: boolean = false;

  onDoc() {
    this.openDoctor = true;
    this.openPatient = false;
  }

  onPat() {
    this.openDoctor = false;
    this.openPatient = true;
  }

  activeChats = [
    {
      doctorName: 'Dr. John Doe',
      patientName: 'Jane Smith',
      lastMessage: "I'm feeling much better, thank you!",
      status: 'active',
    },
    {
      doctorName: 'Dr. Mary Johnson',
      patientName: 'Robert Brown',
      lastMessage: 'Please update me on the test results.',
      status: 'active',
    },
  ];

  doctors = [
    {
      name: 'Dr. John Doe',
      specialization: 'Cardiology',
      status: 'available',
    },
    {
      name: 'Dr. Mary Johnson',
      specialization: 'Pediatrics',
      status: 'busy',
    },
  ];

  patients = [
    {
      name: 'Jane Smith',
      condition: 'Hypertension',
      age: 29,
    },
    {
      name: 'Robert Brown',
      condition: 'Diabetes',
      age: 45,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Function to handle "View Chat"
  viewChat(chat: any): void {
    alert(
      `Viewing chat between Dr. ${chat.doctorName} and ${chat.patientName}`
    );
  }

  // Function to handle "Transfer" (e.g., assign a different doctor)
  transferChat(chat: any): void {
    alert(
      `Transferring chat between Dr. ${chat.doctorName} and ${chat.patientName}`
    );
  }

  // Function to handle "Close Chat"
  closeChat(chat: any): void {
    alert(
      `Closing chat between Dr. ${chat.doctorName} and ${chat.patientName}`
    );
  }

  // Function to handle "Set Availability"
  setAvailability(doctor: any): void {
    alert(`Setting availability for Dr. ${doctor.name}`);
  }

  // Function to handle "Assign Chat" (assigning a doctor to a patient)
  assignChat(doctor: any): void {
    alert(`Assigning chat to Dr. ${doctor.name}`);
  }

  // Function to handle "Deactivate" (deactivating a doctor)
  deactivateDoctor(doctor: any): void {
    alert(`Deactivating Dr. ${doctor.name}`);
  }

  // Function to handle "View Details" of a patient
  viewPatientDetails(patient: any): void {
    alert(`Viewing details of patient ${patient.name}`);
  }

  // Function to handle "Remove Patient"
  removePatient(patient: any): void {
    alert(`Removing patient ${patient.name}`);
  }
}
