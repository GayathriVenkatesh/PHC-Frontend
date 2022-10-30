import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaAddFollowupComponent } from './asha-add-followup.component';

describe('AshaAddFollowupComponent', () => {
  let component: AshaAddFollowupComponent;
  let fixture: ComponentFixture<AshaAddFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshaAddFollowupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshaAddFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
