import { CommonModule } from '@angular/common';
import { Component, HostListener, input, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isLeftSidebarCollapsed = input.required<boolean>();

  changeIsLeftSidebarCollapsed = output<boolean>();

  items = [
    {  routeLink: 'dashboard', icon: 'fas fa-home',  label: 'Dashboard',  },
    {  routeLink: 'doctors',  icon: 'fas fa-user-md',  label: 'Doctors',  },
    {  routeLink: 'patients',  icon: 'fas fa-user-injured', label: 'Patients',  },
    {  routeLink: 'notifications',  icon: 'fal fa-bell',  label: 'Notifications',  },
    {  routeLink: 'chats',  icon: 'fal fa-comments',  label: 'Chats',  },
    {  routeLink: 'blogs',  icon: 'fal fa-pen',  label: 'Blogs',  },
    {  routeLink: 'appointments',  icon: 'fas fa-clock',  label: 'Appointments',  },
    {  routeLink: 'payments',  icon: 'fa fa-wallet',  label: 'Payments',  },
    {  routeLink: 'profile',  icon: 'fa fa-user-cog',  label: 'Profile',  },
  ];


  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
