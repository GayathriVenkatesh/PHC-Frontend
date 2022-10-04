import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFollowupTableComponent } from './patient-followup-table.component';

describe('PatientFollowupTableComponent', () => {
  let component: PatientFollowupTableComponent;
  let fixture: ComponentFixture<PatientFollowupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFollowupTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFollowupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
