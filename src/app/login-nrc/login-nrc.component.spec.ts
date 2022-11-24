import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNrcComponent } from './login-nrc.component';

describe('LoginNrcComponent', () => {
  let component: LoginNrcComponent;
  let fixture: ComponentFixture<LoginNrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
