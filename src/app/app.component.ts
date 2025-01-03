import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashbored/admin-dashbored.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Admin';
}
