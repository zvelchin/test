import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/service/user.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.style.scss'],
})
export class AuthComponent implements OnDestroy {
  public isShowPassword: boolean = false;
  public authForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  private _destroy$ = new Subject<void>();

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _messageService: MessageService
  ) {}

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public login(): void {
    const { email, password } = this.authForm.getRawValue();

    this._userService
      .login({ email, password })
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: () => {
          this._router.navigate(['app']);
        },
        error: () => {
          this.authForm.setErrors({ invalid: true });
          this._messageService.add({
            severity: 'error',
            detail: `Invalid username or password. Try again or click on the "I don't remember
        my password" link to reset it.`,
          });
        },
      });
  }
}
