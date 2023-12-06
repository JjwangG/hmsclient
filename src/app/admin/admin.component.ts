import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Role, UserModel } from '../user/model/user-model';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message: string = '';
  hideMsg = true;
  msgStyle = {
    color: '',
    'background-color': 'white',
    'font-size': '150%',
  };

  userForm = this.builder.group({
    id: [''],
    employeenum: [''],
    password: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    role: [''],
  });

  get id(): AbstractControl {
    return <AbstractControl>this.userForm.get('id');
  }

  get employeenum(): AbstractControl {
    return <AbstractControl>this.userForm.get('employeenum');
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

  get email(): AbstractControl {
    return <AbstractControl>this.userForm.get('email');
  }

  get role(): AbstractControl {
    return <AbstractControl>this.userForm.get('role');
  }

  constructor(private builder: FormBuilder,
              private userService: UserService) {
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
    const book = new UserModel(
      Number(this.userForm.value.id), 
      Number(this.userForm.value.employeenum),
      <string>this.userForm.value.password,
      <string>this.userForm.value.firstname,
      <string>this.userForm.value.lastname,
      <string>this.userForm.value.email,
      new Role('nurse', 0));
    this.userService.addUser(book).subscribe({
      error: (_: any) => {
        this.showMessage('error', 'Unable to add the user');
      }
    });
    this.userForm.reset();
  }
}