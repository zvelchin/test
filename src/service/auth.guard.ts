import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

export const isAuthorized: CanMatchFn = (): Observable<boolean> => {
  const cookie = inject(CookieService);
  const router = inject(Router);
  if (cookie.get('auth_token')) {
    return of(true);
  } else {
    router.navigate(['auth']);
    return of(false);
  }
};

export const isUnauthorized: CanMatchFn = (): Observable<boolean> => {
  const cookie = inject(CookieService);
  const router = inject(Router);
  if (!cookie.get('auth_token')) {
    return of(true);
  } else {
    router.navigate(['app']);
    return of(false);
  }
};
