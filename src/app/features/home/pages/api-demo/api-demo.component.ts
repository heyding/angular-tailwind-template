import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { delay, of } from 'rxjs';
import { Post } from '../../../../core/api/generated/models/post';
import { User } from '../../../../core/api/generated/models/user';
import { PostsFacadeService } from '../../../../core/services/posts-facade.service';
import { UsersFacadeService } from '../../../../core/services/users-facade.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ToastService } from '../../../../shared/services/toast.service';

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
    private usersFacade: UsersFacadeService,
    private postsFacade: PostsFacadeService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersFacade.getUsers().subscribe({
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
    this.usersFacade.getUserById(userId).subscribe({
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
    this.postsFacade.getPosts(userId).subscribe({
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

    this.postsFacade.createPost(newPost).subscribe({
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
    this.postsFacade.deletePost(postId).subscribe({
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
    this.usersFacade.getUserById(999999).subscribe({
      error: error => {
        // Error is handled by error interceptor
        console.error('Expected error for demo:', error);
      },
    });
  }

  testLoadingState(): void {
    // This demonstrates the loading interceptor in action
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ];

    of(mockUsers)
      .pipe(delay(1000))
      .subscribe({
        next: users => {
          this.users = users;
          this.toastService.show('Mock data loaded (with delay)', 'info');
        },
      });
  }
}
