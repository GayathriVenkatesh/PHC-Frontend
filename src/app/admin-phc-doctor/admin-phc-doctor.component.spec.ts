import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPhcDoctorComponent } from './admin-phc-doctor.component';

describe('AdminPhcDoctorComponent', () => {
  let component: AdminPhcDoctorComponent;
  let fixture: ComponentFixture<AdminPhcDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPhcDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPhcDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
