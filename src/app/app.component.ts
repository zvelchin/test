import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationStart, Router, Scroll } from '@angular/router';
import { IUser, UserService } from '../service/user.service';
import { MenuItem } from 'primeng/api';
import { ProfileService } from 'src/service/profile.service';
import { Subject, takeUntil } from 'rxjs';

interface ILink {
  link: string;
  linkName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.style.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public user: IUser | undefined;
  public pageTitle: string | undefined = '';
  public link: ILink[] = [
    { link: '/app/home', linkName: 'Home' },
    { link: '/app/inventory', linkName: 'Inventory' },
    { link: '/app/reports', linkName: 'Reports' },
    { link: '/app/billing', linkName: 'Billing' },
    { link: '/app/profile', linkName: 'Profile' },
  ];
  public currentRoute: string = '';
  public items: MenuItem[] = [];
  private _destroy$ = new Subject<void>();

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _profileService: ProfileService
  ) {
    this._profileService.userData.pipe(takeUntil(this._destroy$)).subscribe({
      next: (user) => {
        this.user = user;

        this.items = [
          {
            label: `${this.user?.name} ${this.user?.surname}`,
          },
          {
            label: 'Link to profile',
            url: this.user?.link,
          },
          {
            label: 'Logout',
            command: () => {
              this._userService.logout();
            },
          },
        ];
      },
    });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public ngOnInit(): void {
    this._router.events.pipe(takeUntil(this._destroy$)).subscribe({
      next: (event) => {
        if (event instanceof Scroll) {
          this.currentRoute = event.routerEvent.urlAfterRedirects;

          if (this.pageTitle === '') {
            this.pageTitle = this.link.find(
              (item) => item.link === this.currentRoute
            )?.linkName;
          }
        }

        if (event instanceof ActivationStart) {
          this.pageTitle = event.snapshot.data['title'];
        }
      },
    });
  }
}
