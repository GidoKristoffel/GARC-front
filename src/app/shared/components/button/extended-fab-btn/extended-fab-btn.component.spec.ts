import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFabBtnComponent } from './extended-fab-btn.component';

describe('ExtendedFabBtnComponent', () => {
  let component: ExtendedFabBtnComponent;
  let fixture: ComponentFixture<ExtendedFabBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedFabBtnComponent]
    });
    fixture = TestBed.createComponent(ExtendedFabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
