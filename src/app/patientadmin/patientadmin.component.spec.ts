import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientadminComponent } from './patientadmin.component';

describe('PatientadminComponent', () => {
  let component: PatientadminComponent;
  let fixture: ComponentFixture<PatientadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientadminComponent]
    });
    fixture = TestBed.createComponent(PatientadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
