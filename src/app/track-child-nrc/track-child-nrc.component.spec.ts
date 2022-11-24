import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChildNrcComponent } from './track-child-nrc.component';

describe('TrackChildNrcComponent', () => {
  let component: TrackChildNrcComponent;
  let fixture: ComponentFixture<TrackChildNrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChildNrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackChildNrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
