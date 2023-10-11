import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsPageComponent } from './artifacts-page.component';

describe('ArtifactsComponent', () => {
  let component: ArtifactsPageComponent;
  let fixture: ComponentFixture<ArtifactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
