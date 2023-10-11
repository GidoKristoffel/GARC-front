import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationPageComponent } from './authorization-page.component';

describe('AuthorizationComponent', () => {
  let component: AuthorizationPageComponent;
  let fixture: ComponentFixture<AuthorizationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
