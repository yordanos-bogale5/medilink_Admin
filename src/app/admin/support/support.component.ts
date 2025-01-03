import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  supportRequests = [
    {
      title: 'Login Issue',
      patientName: 'Jane Smith',
      issue: 'Unable to log in',
      status: 'open',
    },
    {
      title: 'Payment Issue',
      patientName: 'Robert Brown',
      issue: 'Payment not processed',
      status: 'open',
    },
  ];

  // Dummy data for active support chats
  activeChats = [
    { userName: 'Jane Smith', lastMessage: 'Please help me with my account.' },
    { userName: 'Robert Brown', lastMessage: 'My payment is stuck.' },
  ];

  // Dummy data for support tickets
  supportTickets = [
    { id: 'T001', status: 'open', lastUpdated: '2024-12-25' },
    { id: 'T002', status: 'in progress', lastUpdated: '2024-12-26' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // View a support request
  viewRequest(request: any): void {
    alert(`Viewing support request: ${request.title}`);
  }

  // Assign a support agent
  assignSupportAgent(request: any): void {
    alert(`Assigning support agent to request: ${request.title}`);
  }

  // Resolve a support request
  resolveRequest(request: any): void {
    alert(`Resolving support request: ${request.title}`);
  }

  // Close a support request
  closeRequest(request: any): void {
    alert(`Closing support request: ${request.title}`);
  }

  // Join a support chat
  joinChat(chat: any): void {
    alert(`Joining chat with user: ${chat.userName}`);
  }

  // View chat logs
  viewChatLogs(chat: any): void {
    alert(`Viewing chat logs for: ${chat.userName}`);
  }

  // Close a chat
  closeChat(chat: any): void {
    alert(`Closing chat with user: ${chat.userName}`);
  }

  // View ticket history
  viewTicketHistory(ticket: any): void {
    alert(`Viewing history for ticket: ${ticket.id}`);
  }

  // Change ticket status
  changeTicketStatus(ticket: any): void {
    alert(`Changing status of ticket: ${ticket.id}`);
  }
}
