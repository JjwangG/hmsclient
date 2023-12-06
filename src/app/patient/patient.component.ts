import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route}).then(() => {});
  }
}
