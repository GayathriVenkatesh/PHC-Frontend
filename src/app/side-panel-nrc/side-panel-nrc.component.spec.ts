import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelNrcComponent } from './side-panel-nrc.component';

describe('SidePanelNrcComponent', () => {
  let component: SidePanelNrcComponent;
  let fixture: ComponentFixture<SidePanelNrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePanelNrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePanelNrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
