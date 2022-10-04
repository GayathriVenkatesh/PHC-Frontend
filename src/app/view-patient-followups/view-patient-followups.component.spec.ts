import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientFollowupsComponent } from './view-patient-followups.component';

describe('ViewPatientFollowupsComponent', () => {
  let component: ViewPatientFollowupsComponent;
  let fixture: ComponentFixture<ViewPatientFollowupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientFollowupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPatientFollowupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
