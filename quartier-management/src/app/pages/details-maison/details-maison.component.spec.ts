import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMaisonComponent } from './details-maison.component';

describe('DetailsMaisonComponent', () => {
  let component: DetailsMaisonComponent;
  let fixture: ComponentFixture<DetailsMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsMaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
