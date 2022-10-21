import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaPatientFollowupComponent } from './asha-patient-followup.component';

describe('AshaPatientFollowupComponent', () => {
  let component: AshaPatientFollowupComponent;
  let fixture: ComponentFixture<AshaPatientFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshaPatientFollowupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshaPatientFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
