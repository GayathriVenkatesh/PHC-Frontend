import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulAssignmentComponent } from './successful-assignment.component';

describe('SuccessfulAssignmentComponent', () => {
  let component: SuccessfulAssignmentComponent;
  let fixture: ComponentFixture<SuccessfulAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
