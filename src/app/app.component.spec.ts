import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: ''
})
class SiteHeaderStubComponent {}

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: ''
})
class SiteFooterStubComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    })
      .overrideComponent(AppComponent, {
        set: {
          imports: [RouterOutlet, SiteHeaderStubComponent, SiteFooterStubComponent]
        }
      })
      .compileComponents();
  });

  it('should create the app shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render the layout outlets', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-site-header')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-site-footer')).toBeTruthy();
  });
});
