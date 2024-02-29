import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCharacterItemComponent } from './available-character-item.component';

describe('AvailableCharacterItemComponent', () => {
  let component: AvailableCharacterItemComponent;
  let fixture: ComponentFixture<AvailableCharacterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableCharacterItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableCharacterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
