import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsQuartierComponent } from './details-quartier.component';

describe('DetailsQuartierComponent', () => {
  let component: DetailsQuartierComponent;
  let fixture: ComponentFixture<DetailsQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsQuartierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
