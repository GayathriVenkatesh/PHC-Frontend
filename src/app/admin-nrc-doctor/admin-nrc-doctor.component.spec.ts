import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNrcDoctorComponent } from './admin-nrc-doctor.component';

describe('AdminNrcDoctorComponent', () => {
  let component: AdminNrcDoctorComponent;
  let fixture: ComponentFixture<AdminNrcDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNrcDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNrcDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
