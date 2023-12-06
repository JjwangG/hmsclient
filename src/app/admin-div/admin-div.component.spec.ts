import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDivComponent } from './admin-div.component';

describe('AdminDivComponent', () => {
  let component: AdminDivComponent;
  let fixture: ComponentFixture<AdminDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDivComponent]
    });
    fixture = TestBed.createComponent(AdminDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
