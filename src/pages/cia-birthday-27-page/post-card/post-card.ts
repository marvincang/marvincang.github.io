import { Component, input } from '@angular/core';
import { BirthdayPost } from '../../../types/BirthdayPost';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
  post = input.required<BirthdayPost>();

  getHoursAgo(time: Date) {
    const timestamp = new Date(time ?? Date.now()).getTime();
    const diffInMins = Math.floor(Math.abs((Date.now() - timestamp) / (1000 * 60)));

    if (diffInMins < 1 * 60) {
      return `${diffInMins}m ago`;
    } else if (diffInMins < 24 * 60) {
      return `${Math.floor(diffInMins / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMins / (24 * 60))}d ago`;
    }
  }
}
