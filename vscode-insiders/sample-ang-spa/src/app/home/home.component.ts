import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="home-container">
      <h1>Welcome to the website</h1>
      <p>{{ currentDate }}</p>

      <textarea placeholder="Enter your review" [(ngModel)]="reviewText"></textarea>
      <button type="submit" (click)="submitReview()">Submit</button>

      <p *ngIf="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  `,
  styles: [
    `
      .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
      }

      textarea {
        width: 300px;
        height: 100px;
        margin: 10px 0;
      }

      .success-message {
        color: green;
        margin-top: 10px;
      }
    `
  ]
})
export class HomeComponent {
  currentDate: string = new Date().toLocaleString();
  reviewText: string = '';
  successMessage: string | null = null;

  submitReview(): void {
    if (this.reviewText.trim()) {
      this.successMessage = 'Your review has been submitted successfully!';
      this.reviewText = '';
    }
  }
}
