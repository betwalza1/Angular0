import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierQuartierComponent } from './modifier-quartier.component';

describe('ModifierQuartierComponent', () => {
  let component: ModifierQuartierComponent;
  let fixture: ComponentFixture<ModifierQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierQuartierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
