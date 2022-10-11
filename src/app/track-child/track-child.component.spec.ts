import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChildComponent } from './track-child.component';

describe('TrackChildComponent', () => {
  let component: TrackChildComponent;
  let fixture: ComponentFixture<TrackChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
