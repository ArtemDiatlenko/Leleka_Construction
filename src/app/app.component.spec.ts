import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        {
          provide: TranslocoService,
          useValue: {
            getActiveLang: () => 'pl',
            setActiveLang: jasmine.createSpy('setActiveLang')
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
    expect(app.title).toBe('Leleka Construction');
  });

  it('should render main brand in header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.site-brand__text strong')?.textContent).toContain('Leleka Construction');
  });
});
