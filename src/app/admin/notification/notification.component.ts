import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  notifications = [
    {
      id: 1,
      title: 'New Appointment Request',
      message:
        'You have a new appointment request from John Doe, scheduled for December 21st, 2024 at 10:00 AM. Please review and confirm.',
      timestamp: '2024-12-20T14:00:00',
      type: 'info', // info, success, error, warning
      userRole: 'doctor', // doctor, patient, admin
      action: 'Approve Appointment',
      actionUrl: '/appointments/1',
      read: false,
    },
    {
      id: 2,
      title: 'Appointment Canceled',
      message:
        'Your appointment with Dr. Smith scheduled for December 22nd, 2024 at 3:00 PM has been canceled by the patient.',
      timestamp: '2024-12-20T15:30:00',
      type: 'warning',
      userRole: 'doctor',
      action: 'View Details',
      actionUrl: '/appointments/2',
      read: false,
    },
    {
      id: 3,
      title: 'Payment Successful',
      message:
        'Your payment for appointment on December 21st has been successfully processed. Thank you!',
      timestamp: '2024-12-19T10:00:00',
      type: 'success',
      userRole: 'patient',
      action: 'View Appointment',
      actionUrl: '/appointments/1',
      read: true,
    },
    {
      id: 4,
      title: 'Blog Post Approved',
      message:
        'Your blog post "Healthy Eating Tips" has been successfully approved and published.',
      timestamp: '2024-12-20T11:00:00',
      type: 'success',
      userRole: 'admin',
      action: 'View Post',
      actionUrl: '/blog/healthy-eating-tips',
      read: true,
    },
    {
      id: 5,
      title: 'Appointment Reminder',
      message:
        'Your appointment with Dr. John is coming up tomorrow, December 21st, 2024 at 10:00 AM.',
      timestamp: '2024-12-20T16:00:00',
      type: 'info',
      userRole: 'patient',
      action: 'View Appointment',
      actionUrl: '/appointments/1',
      read: false,
    },
    {
      id: 6,
      title: 'System Maintenance Alert',
      message:
        'The system will undergo scheduled maintenance on December 22nd, 2024 from 12:00 AM to 4:00 AM. Please plan accordingly.',
      timestamp: '2024-12-20T17:00:00',
      type: 'warning',
      userRole: 'admin',
      action: 'More Info',
      actionUrl: '/settings/system-maintenance',
      read: false,
    },
    {
      id: 7,
      title: 'Doctor Profile Updated',
      message:
        'Your doctor profile has been successfully updated. Please review your information.',
      timestamp: '2024-12-18T12:00:00',
      type: 'success',
      userRole: 'doctor',
      action: 'Review Profile',
      actionUrl: '/profile/doctor',
      read: true,
    },
    {
      id: 8,
      title: 'New Blog Comment',
      message:
        'You have received a new comment on your blog post "Healthy Eating Tips".',
      timestamp: '2024-12-20T18:00:00',
      type: 'info',
      userRole: 'admin',
      action: 'View Comment',
      actionUrl: '/blog/healthy-eating-tips/comments',
      read: false,
    },
    {
      id: 9,
      title: 'Appointment Approved',
      message:
        'Your appointment with Dr. Smith has been confirmed for December 21st, 2024 at 10:00 AM.',
      timestamp: '2024-12-19T14:00:00',
      type: 'success',
      userRole: 'patient',
      action: 'View Appointment',
      actionUrl: '/appointments/1',
      read: true,
    },
    {
      id: 10,
      title: 'Account Deactivation Warning',
      message:
        'Your account will be deactivated in 24 hours due to inactivity. Please log in to avoid deactivation.',
      timestamp: '2024-12-20T19:00:00',
      type: 'error',
      userRole: 'patient',
      action: 'Reactivate Account',
      actionUrl: '/account/reactivate',
      read: false,
    },
  ];
}
