import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import {
  ActivationStart,
  Event,
  NavigationEnd,
  Router,
  Scroll,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CommonModule } from '@angular/common';
import { Observable, concat, of } from 'rxjs';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;
let router: Router;

class Events extends Router {
  constructor() {
    super();
  }

  override get events(): Observable<Event> {
    return concat(
      of(new Scroll(new NavigationEnd(0, '', 'inventory'), [0, 0], '')),
      of(
        new ActivationStart({
          data: { title: 'home' },
        } as any)
      )
    );
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent, data: { title: 'home' } },
          { path: 'inventory', component: InventoryComponent },
        ]),
        MenuModule,
        CommonModule,
      ],
      providers: [{ provide: Router, useClass: Events }],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should router event ActivationStart', fakeAsync(() => {
    fixture.detectChanges();
    router.navigate(['home']).then(() => {
      expect(app.pageTitle).toBe('home');
    });
    flush();
  }));

  it('should router event Scroll', fakeAsync(() => {
    fixture.detectChanges();
    router.navigate(['inventory']).then(() => {
      expect(app.currentRoute).toBe('inventory');
    });
    flush();
  }));
});
