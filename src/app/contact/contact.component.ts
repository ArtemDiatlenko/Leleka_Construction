import { NgForOf, NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { TranslocoDirective } from '@ngneat/transloco';
import { finalize } from 'rxjs/operators';

const ROLE_OPTIONS = ['residential', 'industrial', 'commercial', 'public', 'other'] as const;
const EXPERIENCE_OPTIONS = ['multiFamily', 'hall', 'office', 'service', 'other'] as const;
const AVAILABILITY_OPTIONS = ['asap', 'oneToThreeMonths', 'threeToSixMonths', 'overSixMonths'] as const;
const COOPERATION_OPTIONS = ['upTo500k', 'from500kTo2m', 'from2mTo5m', 'over5m', 'toDiscuss'] as const;

type RoleOption = (typeof ROLE_OPTIONS)[number];

const ERROR_PRIORITY = ['required', 'email', 'fullName', 'phone', 'location', 'minlength', 'maxlength'] as const;
const FIELD_ERROR_KEYS = {
  fullName: {
    required: 'fullNameRequired',
    fullName: 'fullNameInvalid',
    maxlength: 'fullNameMax'
  },
  phone: {
    required: 'phoneRequired',
    phone: 'phoneInvalid'
  },
  email: {
    required: 'emailRequired',
    email: 'emailInvalid',
    maxlength: 'emailMax'
  },
  role: {
    required: 'roleRequired'
  },
  location: {
    required: 'locationRequired',
    location: 'locationInvalid',
    maxlength: 'locationMax'
  },
  availability: {
    required: 'availabilityRequired'
  },
  scope: {
    required: 'scopeRequired',
    minlength: 'scopeMin',
    maxlength: 'scopeMax'
  },
  message: {
    required: 'messageRequired',
    minlength: 'messageMin',
    maxlength: 'messageMax'
  },
  consent: {
    required: 'consentRequired'
  }
} as const;

type ContactField = keyof typeof FIELD_ERROR_KEYS;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule, TranslocoDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly roleOptions = ROLE_OPTIONS;
  readonly experienceOptions = EXPERIENCE_OPTIONS;
  readonly availabilityOptions = AVAILABILITY_OPTIONS;
  readonly cooperationOptions = COOPERATION_OPTIONS;
  private readonly endpoint = 'https://formsubmit.co/ajax/adyatlenko5@gmail.com';
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly inquiryForm = this.formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.maxLength(80), fullNameValidator]],
    phone: ['', [Validators.required, phoneValidator]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    role: ['', Validators.required],
    experience: [''],
    location: ['', [Validators.required, Validators.maxLength(80), locationValidator]],
    availability: ['', Validators.required],
    cooperation: [''],
    scope: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(160)]],
    message: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(800)]],
    consent: [false, Validators.requiredTrue],
    companyName: ['']
  });

  submitState: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

  private readonly destroyRef = inject(DestroyRef);

  get isSubmitting(): boolean {
    return this.submitState === 'submitting';
  }

  get isSuccess(): boolean {
    return this.submitState === 'success';
  }

  get isError(): boolean {
    return this.submitState === 'error';
  }

  get selectedRoleAdviceKey(): string | null {
    const selectedRole = this.inquiryForm.controls.role.value;
    return this.isRoleOption(selectedRole) ? `contact.form.roleAdvice.${selectedRole}` : null;
  }

  cleanPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const cleanValue = sanitizePhone(input.value);

    if (input.value === cleanValue) {
      return;
    }

    input.value = cleanValue;
    this.inquiryForm.controls.phone.setValue(cleanValue, { emitEvent: false });
  }

  submitInquiry(): void {
    if (this.isSubmitting) {
      return;
    }

    if (this.hasHoneypotValue()) {
      this.submitState = 'success';
      this.resetForm();
      return;
    }

    this.normalizeFormValues();

    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.submitState = 'submitting';
    this.http.post(
      this.endpoint,
      this.buildPayload(),
      {
        headers: new HttpHeaders({
          Accept: 'application/json'
        })
      }
    )
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          if (this.submitState === 'submitting') {
            this.submitState = 'idle';
          }
        })
      )
      .subscribe({
        next: () => {
          this.submitState = 'success';
          this.resetForm();
        },
        error: () => {
          this.submitState = 'error';
        }
      });
  }

  isInvalid(controlName: keyof typeof this.inquiryForm.controls): boolean {
    const control = this.inquiryForm.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  getErrorKey(controlName: ContactField): string | null {
    const control = this.inquiryForm.controls[controlName];

    if (!this.isInvalid(controlName) || !control.errors) {
      return null;
    }

    const fieldErrors = FIELD_ERROR_KEYS[controlName];
    const activeError = ERROR_PRIORITY.find(errorCode => control.hasError(errorCode));

    return activeError ? fieldErrors[activeError as keyof typeof fieldErrors] ?? null : null;
  }

  private buildPayload(): FormData {
    const value = this.inquiryForm.getRawValue();
    const payload = new FormData();

    payload.append('name', value.fullName);
    payload.append('phone', value.phone);
    payload.append('email', value.email);
    payload.append('role', value.role);
    payload.append('experience', value.experience);
    payload.append('location', value.location);
    payload.append('availability', value.availability);
    payload.append('cooperation_preference', value.cooperation);
    payload.append('scope', value.scope);
    payload.append('message', value.message);
    payload.append('consent', value.consent ? 'yes' : 'no');
    payload.append('_subject', `Leleka Construction inquiry from ${value.fullName}`);
    payload.append('_replyto', value.email);
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');
    payload.append('_honey', value.companyName);

    return payload;
  }

  private hasHoneypotValue(): boolean {
    return this.inquiryForm.controls.companyName.value.trim().length > 0;
  }

  private isRoleOption(value: string): value is RoleOption {
    return (ROLE_OPTIONS as readonly string[]).includes(value);
  }

  private normalizeFormValues(): void {
    const controls = this.inquiryForm.controls;

    controls.fullName.setValue(controls.fullName.value.trim(), { emitEvent: false });
    controls.phone.setValue(sanitizePhone(controls.phone.value).trim(), { emitEvent: false });
    controls.email.setValue(controls.email.value.trim(), { emitEvent: false });
    controls.location.setValue(controls.location.value.trim(), { emitEvent: false });
    controls.scope.setValue(controls.scope.value.trim(), { emitEvent: false });
    controls.message.setValue(controls.message.value.trim(), { emitEvent: false });
  }

  private resetForm(): void {
    this.inquiryForm.reset({
      fullName: '',
      phone: '',
      email: '',
      role: '',
      experience: '',
      location: '',
      availability: '',
      cooperation: '',
      scope: '',
      message: '',
      consent: false,
      companyName: ''
    });
  }
}

function fullNameValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').trim();

  if (!value) {
    return null;
  }

  const hasValidCharacters = /^[\p{L}\p{M}.'’ -]+$/u.test(value);
  const hasNameAndSurname = value.split(/\s+/).filter(Boolean).length >= 2;

  return hasValidCharacters && hasNameAndSurname ? null : { fullName: true };
}

function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').trim();

  if (!value) {
    return null;
  }

  const digits = value.replace(/\D/g, '');
  const plusCount = (value.match(/\+/g) ?? []).length;
  const hasValidCharacters = /^\+?[0-9\s()-]+$/.test(value) && plusCount <= 1;

  return hasValidCharacters && digits.length >= 7 && digits.length <= 15 ? null : { phone: true };
}

function locationValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').trim();

  if (!value) {
    return null;
  }

  return value.length >= 2 && /^[\p{L}\p{M}0-9\s.,'’/-]+$/u.test(value) ? null : { location: true };
}

function sanitizePhone(value: string): string {
  const allowedCharacters = value.replace(/[^\d+()\s-]/g, '');

  return allowedCharacters
    .replace(/\+/g, (match, index) => index === 0 ? match : '')
    .replace(/\s{2,}/g, ' ')
    .trimStart();
}
