import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService } from 'src/service/profile.service';
import { IUser } from 'src/service/user.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.style.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public user: IUser | undefined;
  public userForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(255),
    ]),
    surname: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(255),
    ]),
    phone: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),
    link: new FormControl({ value: '', disabled: false }, [
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
  });

  constructor(
    private _profileService: ProfileService,
    private _messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this._profileService.userData.pipe(takeUntil(this._destroy$)).subscribe({
      next: (user) => {
        this.user = user as IUser;

        this.userForm.setValue({
          ...Object.fromEntries(
            Object.entries(this.user).filter(
              (item) => item[0] !== 'password' && item[0] !== 'token'
            )
          ),
        });
      },
    });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public updateUser(): void {
    this._profileService.user.next(this.userForm.getRawValue());

    this._messageService.add({
      severity: 'success',
      detail: 'Success',
    });
  }

  public cancel(): void {
    this.userForm.reset(this.user);
  }
}
