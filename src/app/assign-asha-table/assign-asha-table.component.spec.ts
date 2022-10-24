import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAshaTableComponent } from './assign-asha-table.component';

describe('AssignAshaTableComponent', () => {
  let component: AssignAshaTableComponent;
  let fixture: ComponentFixture<AssignAshaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAshaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignAshaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
