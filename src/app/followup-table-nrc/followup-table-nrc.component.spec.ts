import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupTableNrcComponent } from './followup-table-nrc.component';

describe('FollowupTableNrcComponent', () => {
  let component: FollowupTableNrcComponent;
  let fixture: ComponentFixture<FollowupTableNrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowupTableNrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowupTableNrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
