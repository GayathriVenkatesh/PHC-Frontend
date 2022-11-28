import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NrcDashboardComponent } from './nrc-dashboard.component';

describe('NrcDashboardComponent', () => {
  let component: NrcDashboardComponent;
  let fixture: ComponentFixture<NrcDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NrcDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NrcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
