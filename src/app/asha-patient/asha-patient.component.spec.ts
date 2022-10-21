import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaPatientComponent } from './asha-patient.component';

describe('AshaPatientComponent', () => {
  let component: AshaPatientComponent;
  let fixture: ComponentFixture<AshaPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshaPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshaPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
