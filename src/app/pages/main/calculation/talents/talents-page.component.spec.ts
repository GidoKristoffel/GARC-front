import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsPageComponent } from './talents-page.component';

describe('TalentsComponent', () => {
  let component: TalentsPageComponent;
  let fixture: ComponentFixture<TalentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
