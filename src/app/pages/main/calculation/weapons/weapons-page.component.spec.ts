import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsPageComponent } from './weapons-page.component';

describe('WeaponsComponent', () => {
  let component: WeaponsPageComponent;
  let fixture: ComponentFixture<WeaponsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
