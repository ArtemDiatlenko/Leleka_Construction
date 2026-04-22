import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  const endpoint = 'https://formsubmit.co/ajax/adyatlenko5@gmail.com';

  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .overrideComponent(ContactComponent, {
      set: { template: '' }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows role-specific advice after a role is selected', () => {
    expect(component.selectedRoleAdviceKey).toBeNull();

    component.inquiryForm.controls.role.setValue('industrial');

    expect(component.selectedRoleAdviceKey).toBe('contact.form.roleAdvice.industrial');
  });

  it('keeps validation messages hidden until a field is touched or changed', () => {
    expect(component.getErrorKey('fullName')).toBeNull();

    component.inquiryForm.controls.fullName.markAsTouched();

    expect(component.getErrorKey('fullName')).toBe('fullNameRequired');
  });

  it('removes unsupported characters from the phone input', () => {
    const input = document.createElement('input');
    input.value = '+48 call 733-071-777';

    component.cleanPhoneInput({ target: input } as unknown as Event);

    expect(input.value).toBe('+48 733-071-777');
    expect(component.inquiryForm.controls.phone.value).toBe('+48 733-071-777');
  });

  it('marks invalid fields instead of submitting an incomplete form', () => {
    spyOn(component.inquiryForm, 'markAllAsTouched');

    component.submitInquiry();

    expect(component.inquiryForm.markAllAsTouched).toHaveBeenCalled();
    expect(component.submitState).toBe('idle');
  });

  it('rejects an invalid phone number before submitting', () => {
    fillValidInquiry({ phone: '123 abc' });

    component.submitInquiry();

    expect(component.getErrorKey('phone')).toBe('phoneInvalid');
    expect(component.submitState).toBe('idle');
  });

  it('posts a valid inquiry and resets the form after success', () => {
    fillValidInquiry();

    component.submitInquiry();

    const request = httpTesting.expectOne(endpoint);
    const payload = request.request.body as FormData;

    expect(request.request.method).toBe('POST');
    expect(payload.get('name')).toBe('Jan Kowalski');
    expect(payload.get('role')).toBe('industrial');
    expect(payload.get('_replyto')).toBe('jan@example.com');

    request.flush({ ok: true });

    expect(component.submitState).toBe('success');
    expect(component.inquiryForm.controls.fullName.value).toBe('');
    expect(component.inquiryForm.controls.consent.value).toBeFalse();
  });

  it('sets an error state when the submission fails', () => {
    fillValidInquiry();

    component.submitInquiry();

    const request = httpTesting.expectOne(endpoint);
    request.flush(
      { message: 'Form service unavailable' },
      { status: 500, statusText: 'Server Error' }
    );

    expect(component.submitState).toBe('error');
  });

  it('silently accepts honeypot submissions without sending a request', () => {
    fillValidInquiry({ companyName: 'Spam Ltd' });

    component.submitInquiry();

    expect(component.submitState).toBe('success');
    expect(component.inquiryForm.controls.companyName.value).toBe('');
  });

  function fillValidInquiry(overrides: Partial<ReturnType<typeof component.inquiryForm.getRawValue>> = {}): void {
    component.inquiryForm.setValue({
      fullName: 'Jan Kowalski',
      phone: '+48733071777',
      email: 'jan@example.com',
      role: 'industrial',
      experience: 'office',
      location: 'Wroclaw',
      availability: 'asap',
      cooperation: 'upTo500k',
      scope: 'Steel fixing and formwork coordination',
      message: 'I have reinforced concrete site experience and can start soon.',
      consent: true,
      companyName: '',
      ...overrides
    });
  }
});
