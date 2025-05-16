import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterQuartierComponent } from './ajouter-quartier.component';

describe('AjouterQuartierComponent', () => {
  let component: AjouterQuartierComponent;
  let fixture: ComponentFixture<AjouterQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterQuartierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
