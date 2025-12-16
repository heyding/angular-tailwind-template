import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../../core/services/api.service';
import { ToastService } from '../../../../shared/services/toast.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { User, Post } from '../../../../core/models/api.model';

@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css'],
})
export class ApiDemoComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  selectedUser: User | null = null;

  constructor(
    private apiService: ApiService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getUsers().subscribe({
      next: users => {
        this.users = users.slice(0, 5); // Show first 5 users
        this.toastService.show('Users loaded successfully!', 'success');
      },
      error: error => {
        // Error handled by interceptor
        console.error('Error loading users:', error);
      },
    });
  }

  loadUser(userId: number): void {
    this.apiService.getUser(userId).subscribe({
      next: user => {
        this.selectedUser = user;
        this.toastService.show(`User ${user.name} loaded!`, 'info');
      },
      error: error => {
        console.error('Error loading user:', error);
      },
    });
  }

  loadPosts(userId?: number): void {
    this.apiService.getPosts(userId).subscribe({
      next: posts => {
        this.posts = posts.slice(0, 5); // Show first 5 posts
        const message = userId ? `Posts by user ${userId} loaded!` : 'All posts loaded!';
        this.toastService.show(message, 'success');
      },
      error: error => {
        console.error('Error loading posts:', error);
      },
    });
  }

  createPost(): void {
    const newPost: Partial<Post> = {
      title: 'New Post from Angular App',
      body: 'This is a test post created via API',
      userId: 1,
    };

    this.apiService.createPost(newPost).subscribe({
      next: post => {
        this.posts.unshift(post);
        this.toastService.show('Post created successfully!', 'success');
      },
      error: error => {
        console.error('Error creating post:', error);
      },
    });
  }

  deletePost(postId: number): void {
    this.apiService.deletePost(postId).subscribe({
      next: () => {
        this.posts = this.posts.filter(p => p.id !== postId);
        this.toastService.show('Post deleted successfully!', 'success');
      },
      error: error => {
        console.error('Error deleting post:', error);
      },
    });
  }

  triggerError(): void {
    // Try to load a non-existent user to trigger 404 error
    this.apiService.getUser(999999).subscribe({
      error: error => {
        // Error is handled by error interceptor
        console.error('Expected error for demo:', error);
      },
    });
  }

  testLoadingState(): void {
    // This demonstrates the loading interceptor in action
    this.apiService.getMockData().subscribe({
      next: users => {
        this.toastService.show('Mock data loaded (with delay)', 'info');
      },
    });
  }
}
