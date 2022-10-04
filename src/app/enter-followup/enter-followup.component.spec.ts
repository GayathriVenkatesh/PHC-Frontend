import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFollowupComponent } from './enter-followup.component';

describe('EnterFollowupComponent', () => {
  let component: EnterFollowupComponent;
  let fixture: ComponentFixture<EnterFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterFollowupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
