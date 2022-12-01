import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnmComponent } from './admin-anm.component';

describe('AdminAnmComponent', () => {
  let component: AdminAnmComponent;
  let fixture: ComponentFixture<AdminAnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
