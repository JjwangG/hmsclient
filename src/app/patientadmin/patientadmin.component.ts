import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { PatientService } from '../patient/service/patient.service';
import { Patient } from '../patient/model/patient';

@Component({
  selector: 'app-patientadmin',
  templateUrl: './patientadmin.component.html',
  styleUrls: ['./patientadmin.component.css']
})
export class PatientadminComponent implements OnInit{
  message: string = '';
  hideMsg = true;
  msgStyle = {
    color: '',
    'background-color': 'white',
    'font-size': '150%',
  };

  userForm = this.builder.group({
    id: [''],
    insurancenumber: [''],
    firstname: [''],
    lastname: [''],
    address:[''],
    dob:[''],
    gender:[''],
    maritalStatus:[''],
    externalDoctor:[''],
    nokFName:[''],
    nokLName:[''],
    nokRelation:[''],
    nokAddress:[''],
    nokPhoneNumber:[''],
    email: [''],
  });

  get id(): AbstractControl {
    return <AbstractControl>this.userForm.get('id');
  }

  get insurancenumber(): AbstractControl {
    return <AbstractControl>this.userForm.get('insurancenumber');
  }

  get password(): AbstractControl {
    return <AbstractControl>this.userForm.get('password');
  }

  get firstname(): AbstractControl {
    return <AbstractControl>this.userForm.get('firstname');
  }

  get lastname(): AbstractControl {
    return <AbstractControl>this.userForm.get('lastname');
  }

  get address(): AbstractControl {
    return <AbstractControl>this.userForm.get('address');
  }

  get dob(): AbstractControl {
    return <AbstractControl>this.userForm.get('dob');
  }

  get gender(): AbstractControl {
    return <AbstractControl>this.userForm.get('gender');
  }

  get maritalStatus(): AbstractControl {
    return <AbstractControl>this.userForm.get('maritalStatus');
  }

  get externalDoctor(): AbstractControl {
    return <AbstractControl>this.userForm.get('externalDoctor');
  }

  get nokFName(): AbstractControl {
    return <AbstractControl>this.userForm.get('nokFName');
  }

  get nokLName(): AbstractControl {
    return <AbstractControl>this.userForm.get('nokLName');
  }

  get nokRelation(): AbstractControl {
    return <AbstractControl>this.userForm.get('nokRelation');
  }

  get nokAddress(): AbstractControl {
    return <AbstractControl>this.userForm.get('nokAddress');
  }

  get nokPhoneNumber(): AbstractControl {
    return <AbstractControl>this.userForm.get('nokPhoneNumber');
  }

  get email(): AbstractControl {
    return <AbstractControl>this.userForm.get('email');
  }

  constructor(private builder: FormBuilder,
    private userService: PatientService) {
}

  ngOnInit(): void {
  }

  showMessage(type: string, msg: string): void {
    this.msgStyle.color = type === 'error' ? 'red' : 'blue';
    this.message = msg;
    this.hideMsg = false;
    setTimeout(
      () => {
      this.hideMsg = true;
      }, 3000
    );
  }

  onSubmit(): void {
    const book = new Patient(
      Number(this.userForm.value.id), 
      Number(this.userForm.value.insurancenumber),
      <string>this.userForm.value.firstname,
      <string>this.userForm.value.lastname,
      <string>this.userForm.value.address,
      new Date(<string>this.userForm.value.dob),
      <string>this.userForm.value.gender,
      <string>this.userForm.value.maritalStatus,
      <string>this.userForm.value.externalDoctor,
      <string>this.userForm.value.nokFName,
      <string>this.userForm.value.nokLName,
      <string>this.userForm.value.nokRelation,
      <string>this.userForm.value.nokAddress,
      <string>this.userForm.value.nokPhoneNumber,
      <string>this.userForm.value.email);
    this.userService.addUser(book).subscribe({
      error: (_: any) => {
        this.showMessage('error', 'Unable to add the user');
      }
    });
    this.userForm.reset();
  }
  
}
