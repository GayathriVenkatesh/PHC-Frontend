import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNrcModalComponent } from './add-nrc-modal.component';

describe('AddNrcModalComponent', () => {
  let component: AddNrcModalComponent;
  let fixture: ComponentFixture<AddNrcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNrcModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNrcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
