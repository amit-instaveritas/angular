export interface PersonalInfoForm {
  name: NameSection;
  gender: GenderSection;
  dob: DOBSection;
  address: AddressSection;
  contact: ContactSection;
}

export interface NameSection {
  firstName: string;
  lastName: string;
}

export interface GenderSection {
  gender: string;
}

export interface DOBSection {
  dob: string;
}

export interface AddressSection {
  address: string;
}

export interface ContactSection {
  phoneNumber: string;
}

export type FormSectionType = 'name' | 'gender' | 'dob' | 'address' | 'contact';
