import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  showDoctorTab: boolean = true;
  isEditing = false;
  isDocEditing = false;
  isPatEditing = false;

  doctors = [
    { id: 101, name: 'Dr. Triston Smith', specialty: 'Cardiologist' },
    { id: 102, name: 'Dr. Anthony Davis', specialty: 'Dermatologist' },
    { id: 103, name: 'Dr. Jane Johnson', specialty: 'Orthopedic' },
  ];

  patients = [
    { id: 401, name: 'Jane smith', age: 28 },
    { id: 402, name: 'Mark Cooper', age: 35 },
    { id: 403, name: 'Barry Gareth', age: 22 },
  ];

  showDoctors() {
    this.showDoctorTab = true;
    this.cancelPat();
  }

  showPatients() {
    this.showDoctorTab = false;
    this.cancelDoc();
  }

  // Edit doctor
  currentEditingDoctor: any = null;

  // Function to enable editing for a specific doctor
  editDoctor(doctor: any) {
    this.currentEditingDoctor = { ...doctor }; // Clone the doctor object
    this.isDocEditing = true;
  }

  // Function to update the doctor's details
  updateDoc(doctor: any) {
    const index = this.doctors.findIndex((d) => d.id === doctor.id);
    if (index !== -1) {
      this.doctors[index] = { ...doctor };
    }
    this.isDocEditing = false;
  }

  // Cancel editing and reset
  cancelDoc() {
    this.currentEditingDoctor = null;
    this.isDocEditing = false;
  }

  // Delete a doctor
  deleteDoctor(doctor: any) {
    if (
      confirm(
        `Are you sure you want to delete ${doctor.name} from the system ?`
      )
    ) {
      this.doctors = this.doctors.filter((d) => d.id !== doctor.id);
      setTimeout(() => alert(`${doctor.name} has been removed`), 200);
    } else {
      alert(`Action has been canceled!`);
    }
  }

  // Edit patient
  currentEditingPatient: any = null;

  // Function to enable editing for a specific patient
  editPatient(patient: any) {
    this.currentEditingPatient = { ...patient };
    this.isPatEditing = true;
  }

  // Function to update the patient's details
  updatePat(patient: any) {
    const index = this.patients.findIndex((p) => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = { ...patient }; // Update the patient details
    }
    this.isPatEditing = false; // Exit edit mode
  }

  // Cancel editing and reset
  cancelPat() {
    this.currentEditingPatient = null;
    this.isPatEditing = false;
  }

  // Delete a patient
  deletePatient(patient: any) {
    if (
      confirm(
        `Are you sure you want to delete ${patient.name} from the system ?`
      )
    ) {
      this.patients = this.patients.filter((p) => p.id !== patient.id);
      setTimeout(() => alert(`${patient.name} has been removed`), 200);
    } else {
      alert(`Action has been canceled!`);
    }
  }
}
