import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAshaComponent } from './admin-asha.component';

describe('AdminAshaComponent', () => {
  let component: AdminAshaComponent;
  let fixture: ComponentFixture<AdminAshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
