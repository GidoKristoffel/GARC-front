import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsCalculationComponent } from './artifacts-calculation.component';

describe('ArtifactsCalculationComponent', () => {
  let component: ArtifactsCalculationComponent;
  let fixture: ComponentFixture<ArtifactsCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactsCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactsCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
