import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLinkComponent } from './default-link.component';

describe('DefaultLinkComponent', () => {
  let component: DefaultLinkComponent;
  let fixture: ComponentFixture<DefaultLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLinkComponent]
    });
    fixture = TestBed.createComponent(DefaultLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
