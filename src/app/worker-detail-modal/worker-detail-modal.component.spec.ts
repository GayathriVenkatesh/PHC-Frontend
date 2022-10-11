import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetailModalComponent } from './worker-detail-modal.component';

describe('WorkerDetailModalComponent', () => {
  let component: WorkerDetailModalComponent;
  let fixture: ComponentFixture<WorkerDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
