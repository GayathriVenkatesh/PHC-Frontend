import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhcModalComponent } from './add-phc-modal.component';

describe('AddPhcModalComponent', () => {
  let component: AddPhcModalComponent;
  let fixture: ComponentFixture<AddPhcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhcModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
