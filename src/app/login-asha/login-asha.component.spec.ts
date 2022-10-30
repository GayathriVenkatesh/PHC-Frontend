import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAshaComponent } from './login-asha.component';

describe('LoginAshaComponent', () => {
  let component: LoginAshaComponent;
  let fixture: ComponentFixture<LoginAshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
