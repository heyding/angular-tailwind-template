import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../api/generated/models/user';
import { UsersService } from '../api/generated/services';

@Injectable({
  providedIn: 'root',
})
export class UsersFacadeService {
  private usersService = inject(UsersService);

  getUsers(): Observable<User[]> {
    return this.usersService.getUsers();
  }

  getUserById(id: number): Observable<User> {
    return this.usersService.getUserById({ id });
  }
}
