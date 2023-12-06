import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Hdivision } from '../hospitaldiv/model/hdivision';
import { HdivisionService } from '../hospitaldiv/service/hdivision.service';

@Component({
  selector: 'app-admin-div',
  templateUrl: './admin-div.component.html',
  styleUrls: ['./admin-div.component.css']
})
export class AdminDivComponent implements OnInit{
  message: string = '';
  hideMsg = true;
  msgStyle = {
    color: '',
    'background-color': 'white',
    'font-size': '150%',
  };

  userForm = this.builder.group({
    id: [''],
    identifier: [''],
    divName: [''],
    location: [''],
    numberOfBed: [''],
    ext: [''],
    bipper: [''],
    full: [''],
    nurse: ['']
  });

  get id(): AbstractControl {
    return <AbstractControl>this.userForm.get('id');
  }

  get identifier(): AbstractControl {
    return <AbstractControl>this.userForm.get('identifier');
  }

  get divName(): AbstractControl {
    return <AbstractControl>this.userForm.get('divName');
  }

  get location(): AbstractControl {
    return <AbstractControl>this.userForm.get('location');
  }

  get numberOfBed(): AbstractControl {
    return <AbstractControl>this.userForm.get('numberOfBed');
  }

  get ext(): AbstractControl {
    return <AbstractControl>this.userForm.get('ext');
  }

  get bipper(): AbstractControl {
    return <AbstractControl>this.userForm.get('bipper');
  }

  get full(): AbstractControl {
    return <AbstractControl>this.userForm.get('full');
  }  

  get nurse(): AbstractControl {
    return <AbstractControl>this.userForm.get('nurse');
  }
  
  constructor(private builder: FormBuilder,
    private userService: HdivisionService) {}

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
    const book = new Hdivision(
      Number(this.userForm.value.id), 
      <string>this.userForm.value.identifier,
      <string>this.userForm.value.divName,
      <string>this.userForm.value.location,
      Number(this.userForm.value.numberOfBed), 
      Number(this.userForm.value.ext),
      Number(this.userForm.value.bipper),  
      //<string>this.userForm.value.full,
      Boolean(this.userForm.value.full),
      <string>this.userForm.value.nurse
      );
    this.userService.addUser(book).subscribe({
      error: (_: any) => {
        this.showMessage('error', 'Unable to add the user');
    }
  });
  this.userForm.reset();
}

}
