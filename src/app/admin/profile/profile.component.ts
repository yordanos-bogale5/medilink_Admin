import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  isEditing: boolean = false;

  user = {
    name: 'teston',
    email: 'teston24@example.com',
    phone: '123-450-7780',
  };

  editProfile() {
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  updateProfile() {
    // console.log('Profile updated:', this.user);
    this.isEditing = false;
  }
}
