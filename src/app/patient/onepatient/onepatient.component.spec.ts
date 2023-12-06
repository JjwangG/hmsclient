import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepatientComponent } from './onepatient.component';

describe('OnepatientComponent', () => {
  let component: OnepatientComponent;
  let fixture: ComponentFixture<OnepatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnepatientComponent]
    });
    fixture = TestBed.createComponent(OnepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
