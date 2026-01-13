import { Component } from '@angular/core';
import { ActivityService } from '../services/activity';
import { AnalyticsService } from '../services/analytics';
import { CommonModule } from '@angular/common';
import { DlqService } from '../services/dlq';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  userId = 'u113';
  events: any[] = [];
  dlqEvents: any[] = [];

  constructor(
    private activityService: ActivityService,
    private analyticsService: AnalyticsService,
    private dlqService: DlqService
  ) {}

  sendLogin() {
    this.activityService.sendLogin(this.userId).subscribe(() => {
      setTimeout(() => {
        this.loadEvents();
      }, 500);
    });
  }

  loadEvents() {
    this.analyticsService.getEventsByUser(this.userId).subscribe((data) => (this.events = data));
  }

  loadDlqEvents() {
    this.dlqService.getDlqEvents().subscribe((data) => {
      this.dlqEvents = data;
    });
  }
}
