import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsCalculationTableComponent } from './artifacts-calculation-table.component';

describe('ArtifactsCalculationTableComponent', () => {
  let component: ArtifactsCalculationTableComponent;
  let fixture: ComponentFixture<ArtifactsCalculationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactsCalculationTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactsCalculationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
