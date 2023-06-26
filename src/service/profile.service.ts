import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser, UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public user = new BehaviorSubject<IUser | undefined>(
    inject(UserService).getCurrentUser()
  );

  public userData = this.user.asObservable();
}
