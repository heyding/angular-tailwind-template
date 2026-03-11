import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../api/generated/models/post';
import { PostInput } from '../api/generated/models/post-input';
import { PostsService } from '../api/generated/services';

@Injectable({
  providedIn: 'root',
})
export class PostsFacadeService {
  private postsService = inject(PostsService);

  getPosts(userId?: number): Observable<Post[]> {
    return this.postsService.getPosts(userId ? { userId } : undefined);
  }

  createPost(post: Partial<Post>): Observable<Post> {
    return this.postsService.createPost({
      body: this.toPostInput(post),
    });
  }

  updatePost(id: number, post: Partial<Post>): Observable<Post> {
    return this.postsService.updatePost({
      id,
      body: this.toPostInput(post),
    });
  }

  patchPost(id: number, post: Partial<Post>): Observable<Post> {
    return this.postsService.patchPost({
      id,
      body: this.toPostInput(post),
    });
  }

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
}
