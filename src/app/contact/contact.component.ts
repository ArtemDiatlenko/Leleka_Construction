import { NgForOf, NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslocoDirective } from '@ngneat/transloco';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule, TranslocoDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly roleOptions = ['residential', 'industrial', 'commercial', 'public', 'other'] as const;
  readonly experienceOptions = ['multiFamily', 'hall', 'office', 'service', 'other'] as const;
  readonly availabilityOptions = ['asap', 'oneToThreeMonths', 'threeToSixMonths', 'overSixMonths'] as const;
  readonly cooperationOptions = ['upTo500k', 'from500kTo2m', 'from2mTo5m', 'over5m', 'toDiscuss'] as const;
  private readonly endpoint = 'https://formsubmit.co/ajax/adyatlenko5@gmail.com';
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly inquiryForm = this.formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    experience: [''],
    location: ['', [Validators.required, Validators.minLength(2)]],
    availability: [''],
    cooperation: [''],
    scope: ['', [Validators.required, Validators.minLength(10)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
    consent: [false, Validators.requiredTrue]
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

  submitInquiry(): void {
    if (this.isSubmitting) {
      return;
    }

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

  hasError(controlName: keyof typeof this.inquiryForm.controls, errorCode: string): boolean {
    return this.inquiryForm.controls[controlName].hasError(errorCode);
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
    payload.append('_honey', '');

    return payload;
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
      consent: false
    });
  }
}
