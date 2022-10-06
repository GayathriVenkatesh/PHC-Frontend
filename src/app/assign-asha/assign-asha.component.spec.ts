import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAshaComponent } from './assign-asha.component';

describe('AssignAshaComponent', () => {
  let component: AssignAshaComponent;
  let fixture: ComponentFixture<AssignAshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignAshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
