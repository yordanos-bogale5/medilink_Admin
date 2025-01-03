import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
// Data binding for profile details
profile = {
  name: 'Admin User',
  email: 'admin@example.com',
  phone: '123-456-7890',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  address: '123 Admin Street, Admin City, Admin Country',
  password: '',
  newPassword: '',
  confirmPassword: '',
  profilePicture: '../../assets/images/bg.png',
};

// File for uploading new profile picture
selectedFile: File | null = null;

// Show password update form
showPasswordForm = false;

// Handle file selection for profile picture
onFileSelect(event: any) {
  this.selectedFile = event.target.files[0];
  if (this.selectedFile) {
    this.profile.profilePicture = URL.createObjectURL(this.selectedFile);
  }
}

// Handle profile update
updateProfile() {
  // Perform logic to update the profile
  console.log('Profile updated:', this.profile);
  alert('Profile updated successfully!');
}

// Handle password change
changePassword() {
  if (this.profile.newPassword === this.profile.confirmPassword) {
    console.log('Password changed');
    alert('Password updated successfully!');
    this.profile.password = this.profile.newPassword;
    this.resetPasswordFields();
  } else {
    alert('Passwords do not match');
  }
}

// Reset password fields
resetPasswordFields() {
  this.profile.newPassword = '';
  this.profile.confirmPassword = '';
}

// Toggle password change form visibility
togglePasswordForm() {
  this.showPasswordForm = !this.showPasswordForm;
}

}
