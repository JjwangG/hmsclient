import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.css']
})
export class AdmitComponent {
  constructor(private builder: FormBuilder) {}

  userForm = this.builder.group({
    lastname: [''],
    role: ['']
  });

  openPopupVar: boolean = false;
  openPopup(): void{
    this.openPopupVar = true;
  }
}
