import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInput } from '../api/generated/models/post-input';
import { PostsService, UsersService } from '../api/generated/services';
import { Post, User } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private usersService = inject(UsersService);
  private postsService = inject(PostsService);

  // GET example
  getUsers(): Observable<User[]> {
    return this.usersService.getUsers();
  }

  // GET by ID example
  getUser(id: number): Observable<User> {
    return this.usersService.getUserById({ id });
  }

  // GET with query params
  getPosts(userId?: number): Observable<Post[]> {
    return this.postsService.getPosts(userId ? { userId } : undefined);
  }

  // POST example
  createPost(post: Partial<Post>): Observable<Post> {
    return this.postsService.createPost({
      body: this.toPostInput(post),
    });
  }

  // PUT example
  updatePost(id: number, post: Partial<Post>): Observable<Post> {
    return this.postsService.updatePost({
      id,
      body: this.toPostInput(post),
    });
  }

  // PATCH example
  patchPost(id: number, post: Partial<Post>): Observable<Post> {
    return this.postsService.patchPost({
      id,
      body: this.toPostInput(post),
    });
  }

  // DELETE example
  deletePost(id: number): Observable<void> {
    return this.postsService.deletePost({ id });
  }

  private toPostInput(post: Partial<Post>): PostInput {
    return {
      title: post.title ?? '',
      body: post.body ?? '',
      userId: post.userId ?? 0,
    };
  }

  // Mock API example (for demo purposes)
  getMockData(): Observable<User[]> {
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ];
    // Simulate network delay
    return of(mockUsers).pipe(delay(1000));
  }
}
