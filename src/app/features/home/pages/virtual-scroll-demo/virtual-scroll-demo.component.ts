import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TranslateModule } from '@ngx-translate/core';

interface VirtualItem {
  id: number;
  title: string;
  description: string;
  category: string;
  timestamp: Date;
}

@Component({
  selector: 'app-virtual-scroll-demo',
  standalone: true,
  imports: [CommonModule, ScrollingModule, TranslateModule],
  templateUrl: './virtual-scroll-demo.component.html',
  styleUrls: ['./virtual-scroll-demo.component.css'],
})
export class VirtualScrollDemoComponent implements OnInit {
  items: VirtualItem[] = [];
  itemHeight = 120; // Height of each item in pixels

  ngOnInit(): void {
    this.generateItems(10000); // Generate 10,000 items
  }

  private generateItems(count: number): void {
    const categories = ['Technology', 'Business', 'Science', 'Sports', 'Entertainment'];

    this.items = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}: ${this.getRandomTitle()}`,
      description: `This is a description for item ${i + 1}. ${this.getRandomText()}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      timestamp: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    }));
  }

  private getRandomTitle(): string {
    const titles = [
      'Amazing Discovery',
      'Breaking News',
      'Important Update',
      'Latest Trend',
      'New Development',
      'Revolutionary Innovation',
      'Exciting Announcement',
    ];
    return titles[Math.floor(Math.random() * titles.length)];
  }

  private getRandomText(): string {
    const texts = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      Technology: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      Business: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      Science: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      Sports: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      Entertainment: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }

  trackByFn(index: number, item: VirtualItem): number {
    return item.id;
  }
}
