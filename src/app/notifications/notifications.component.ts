import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

  // Types of notifications
  notificationTypes = ['success', 'danger', 'info', 'comment', 'like'];

  // List of notifications with types, timestamps, and content
  notifications: { message: string, type: string, timestamp: Date, user: string }[] = [
    { message: 'Patient John Doe has scheduled an appointment with Dr. Smith.', type: 'info', timestamp: new Date(), user: 'Admin' },
    { message: 'Patient Jane Smith has canceled their appointment with Dr. Johnson.', type: 'danger', timestamp: new Date(), user: 'Admin' },
    { message: 'New patient appointment request: Anna Parker with Dr. Davis.', type: 'success', timestamp: new Date(), user: 'Admin' },
    { message: 'Dr. Smith commented on your appointment.', type: 'comment', timestamp: new Date(), user: 'Dr. Smith' },
    { message: 'Patient Jane Smith liked your appointment request.', type: 'like', timestamp: new Date(), user: 'Jane Smith' }
  ];

  // Method to dismiss a notification
  dismissNotification(index: number) {
    this.notifications.splice(index, 1);
  }
}
