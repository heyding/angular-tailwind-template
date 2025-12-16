import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

interface Task {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-drag-drop-demo',
  standalone: true,
  imports: [CommonModule, DragDropModule, TranslateModule],
  templateUrl: './drag-drop-demo.component.html',
  styleUrls: ['./drag-drop-demo.component.css'],
})
export class DragDropDemoComponent {
  todo: Task[] = [
    { id: 1, title: 'Design Homepage', description: 'Create mockups for the new homepage' },
    { id: 2, title: 'API Integration', description: 'Connect frontend with backend API' },
    { id: 3, title: 'User Authentication', description: 'Implement login and signup' },
  ];

  inProgress: Task[] = [
    { id: 4, title: 'Database Setup', description: 'Configure PostgreSQL database' },
    { id: 5, title: 'Component Library', description: 'Build reusable UI components' },
  ];

  done: Task[] = [
    { id: 6, title: 'Project Setup', description: 'Initialize Angular project' },
    { id: 7, title: 'Routing Setup', description: 'Configure app routing' },
  ];

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
