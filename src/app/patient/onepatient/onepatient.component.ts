import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-onepatient',
  templateUrl: './onepatient.component.html',
  styleUrls: ['./onepatient.component.css']
})

export class OnepatientComponent implements OnInit, OnDestroy{
  selectedUser!: Patient|null;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.patientService.getUser(id).subscribe(
        (data: Patient) => {
          this.selectedUser = data;
        },
        (_:any) => {
          this.selectedUser = null;
        });
      //this.selectedUser = this.PatientService.getUser(id);
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
