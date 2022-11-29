import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPhcComponent } from './admin-phc.component';

describe('AdminPhcComponent', () => {
  let component: AdminPhcComponent;
  let fixture: ComponentFixture<AdminPhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPhcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
