import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaldivComponent } from './hospitaldiv.component';

describe('HospitaldivComponent', () => {
  let component: HospitaldivComponent;
  let fixture: ComponentFixture<HospitaldivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitaldivComponent]
    });
    fixture = TestBed.createComponent(HospitaldivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
