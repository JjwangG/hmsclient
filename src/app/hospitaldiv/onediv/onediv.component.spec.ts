import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedivComponent } from './onediv.component';

describe('OnedivComponent', () => {
  let component: OnedivComponent;
  let fixture: ComponentFixture<OnedivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnedivComponent]
    });
    fixture = TestBed.createComponent(OnedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
