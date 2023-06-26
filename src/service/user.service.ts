import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export interface IUser {
  email: string;
  password: string;
  name: string;
  surname: string;
  link: string;
  phone: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _cookieSerice: CookieService, private _router: Router) {}

  public users: IUser[] = [
    {
      email: 'admin@gmail.com',
      password: '123qwe',
      name: 'Mikail',
      surname: 'Mikailov',
      link: 'http://test.com',
      phone: '+7 (999) 999 99 99',
      token: '12gfghd',
    },
    {
      email: 'admin@gmail.com',
      password: 'testpassword',
      name: 'Nizami',
      surname: 'Gencevi',
      link: 'http://test.com',
      phone: '+7 (888) 888 88 88',
      token: '200gen2',
    },
  ];

  public login(login: { email: string; password: string }): Observable<void> {
    const user = this.users.find(
      (item) => item.email === login.email && item.password === login.password
    ) as IUser;

    return new Observable((observer) => {
      if (user) {
        this._cookieSerice.set('auth_token', user.token, 7);
        observer.next();
      } else {
        observer.error();
      }

      observer.complete();
    });
  }

  public getCurrentUser(): IUser | undefined {
    return this.users.find(
      (item) => item.token === this._cookieSerice.get('auth_token')
    );
  }

  public logout(): void {
    this._cookieSerice.delete('auth_token');
    this._router.navigate(['']);
  }
}
