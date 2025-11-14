import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../../services/form-group/form-group';
import { NameSection, DOBSection, AddressSection } from '../../types/form-group.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-consumer',
  imports: [CommonModule],
  templateUrl: './form-consumer.html',
  styleUrls: ['./form-consumer.css']
})
export class FormConsumerComponent implements OnInit {
  nameData: NameSection | undefined;
  dobData: DOBSection | undefined;
  addressData: AddressSection | undefined;

  constructor(private formGroupService: FormGroupService) { }

  ngOnInit(): void {
    this.nameData = this.formGroupService.getNameSection();
    this.dobData = this.formGroupService.getDOBSection();
    this.addressData = this.formGroupService.getAddressSection();

    this.formGroupService.getSectionObservable<NameSection>('name').subscribe(data => {
      this.nameData = data;
    });
  }
}
