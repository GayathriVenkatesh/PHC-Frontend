import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaModalComponent } from './asha-modal.component';

describe('AshaModalComponent', () => {
  let component: AshaModalComponent;
  let fixture: ComponentFixture<AshaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
