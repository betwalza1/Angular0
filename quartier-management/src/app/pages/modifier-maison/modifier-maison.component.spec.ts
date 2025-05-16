import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMaisonComponent } from './modifier-maison.component';

describe('ModifierMaisonComponent', () => {
  let component: ModifierMaisonComponent;
  let fixture: ComponentFixture<ModifierMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierMaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
