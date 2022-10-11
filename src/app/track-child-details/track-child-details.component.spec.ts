import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChildDetailsComponent } from './track-child-details.component';

describe('TrackChildDetailsComponent', () => {
  let component: TrackChildDetailsComponent;
  let fixture: ComponentFixture<TrackChildDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChildDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackChildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
