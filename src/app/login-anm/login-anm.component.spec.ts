import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnmComponent } from './login-anm.component';

describe('LoginAnmComponent', () => {
  let component: LoginAnmComponent;
  let fixture: ComponentFixture<LoginAnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAnmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
