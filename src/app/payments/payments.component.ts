import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {

  searchTerm = '';
  alertMessage: string | null = null;

  payments = [
    { patientName: 'John Doe', doctorOrOther: 'Dr. Smith', billAmount: 100, status: 'Paid', description: 'Consultation and follow-up' },
    { patientName: 'Jane Doe', doctorOrOther: 'Dr. Brown', billAmount: 200, status: 'Pending', description: 'Surgery and recovery' },
    { patientName: 'James Smith', doctorOrOther: 'Dr. Johnson', billAmount: 50, status: 'Paid', description: 'Routine checkup' },
    { patientName: 'Alice Brown', doctorOrOther: 'Dr. Lee', billAmount: 150, status: 'Pending', description: 'Dental treatment' },
    { patientName: 'Bob White', doctorOrOther: 'Dr. Green', billAmount: 120, status: 'Paid', description: 'Blood tests' },
  ];

  filteredPayments = this.payments;

  constructor() { }

  ngOnInit(): void { }

  // Filter payments based on the search term
  filterPayments(): void {
    if (!this.searchTerm) {
      this.filteredPayments = this.payments;
    } else {
      this.filteredPayments = this.payments.filter(payment => 
        payment.patientName.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        payment.doctorOrOther.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Update payment description
  updatePaymentDescription(payment: any): void {
    this.alertMessage = `Updated payment description for ${payment.patientName}`;
    // In a real application, you would call a service to update the data.
    setTimeout(() => {
      this.alertMessage = null; // Hide alert after 3 seconds
    }, 3000);
  }

  // Get the badge class based on payment status
  getBadgeClass(status: string): string {
    switch (status) {
      case 'Paid':
        return 'badge-success';
      case 'Pending':
        return 'badge-warning';
      default:
        return 'badge-secondary';
    }
  }
}