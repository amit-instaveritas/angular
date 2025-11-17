import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonalInfoForm, FormSectionType, NameSection, GenderSection, DOBSection, AddressSection, ContactSection } from '../../types/form-group.types';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {
  private formDataSubject = new BehaviorSubject<Partial<PersonalInfoForm>>({});

  constructor(private http: HttpClient) { }

  // Get specific section data
  getSection<T>(sectionType: FormSectionType): T | undefined {
    const formData = this.formDataSubject.value;
    return formData[sectionType as keyof PersonalInfoForm] as T;
  }

  // Get all section data as Observable
  getSectionObservable<T>(sectionType: FormSectionType): Observable<T | undefined> {
    return new Observable(observer => {
      observer.next(this.getSection<T>(sectionType));
      const subscription = this.formDataSubject.subscribe(formData => {
        observer.next(formData[sectionType as keyof PersonalInfoForm] as T);
      });
      return () => subscription.unsubscribe();
    });
  }

  // Update specific section
  updateSection(sectionType: FormSectionType, data: any): void {
    const currentData = this.formDataSubject.value;
    this.formDataSubject.next({
      ...currentData,
      [sectionType]: data
    });
  }

  // Get all form data
  getAllFormData(): Partial<PersonalInfoForm> {
    return this.formDataSubject.value;
  }

  // Reset form data
  resetFormData(): void {
    this.formDataSubject.next({});
  }

  // Get specific section by type with type safety
  getNameSection(): NameSection | undefined {
    return this.getSection<NameSection>('name');
  }

  getDOBSection(): DOBSection | undefined {
    return this.getSection<DOBSection>('dob');
  }

  getAddressSection(): AddressSection | undefined {
    return this.getSection<AddressSection>('address');
  }

  getContactSection(): ContactSection | undefined {
    return this.getSection<ContactSection>('contact');
  }

  getGenderSection(): GenderSection | undefined {
    return this.getSection<GenderSection>('gender');
  }

  login(): Observable<any> {
    const { username, password } = this.formDataSubject.value as any;

    const formData = new FormData();
    formData.append('username', username || '');
    formData.append('password', password || '');

    return this.http.post('http://127.0.0.1:8000/api/login', formData);
  }

  register(csrf: any): Observable<any> {
    const { name, email, password, confirmPassword } = this.formDataSubject.value as any;

    const formData = new FormData();
    formData.append('name', name || '');
    formData.append('email', email || '');
    formData.append('password', password || '');
    formData.append('password_confirmation', confirmPassword || '');

    console.log(formData);

    return this.http.post('http://127.0.0.1:8000/api/register', formData, { headers: { 'X-CSRF-TOKEN': typeof csrf === 'object' ? csrf.token : csrf } });
  }
}
