import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { VacancyComponent } from './vacancy.component';

describe('VacancyComponent', () => {
  let component: VacancyComponent;
  let fixture: ComponentFixture<VacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ path: 'zbrojarz' }))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load vacancy from path', () => {
    expect(component.vacancy?.path).toBe('zbrojarz');
    expect(component.otherVacancies.length).toBeGreaterThan(0);
  });
});
