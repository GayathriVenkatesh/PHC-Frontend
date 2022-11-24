import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFollowupTableNrcComponent } from './patient-followup-table-nrc.component';

describe('PatientFollowupTableNrcComponent', () => {
  let component: PatientFollowupTableNrcComponent;
  let fixture: ComponentFixture<PatientFollowupTableNrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFollowupTableNrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFollowupTableNrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
