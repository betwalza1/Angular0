import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaisonComponent } from './ajouter-maison.component';

describe('AjouterMaisonComponent', () => {
  let component: AjouterMaisonComponent;
  let fixture: ComponentFixture<AjouterMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterMaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
