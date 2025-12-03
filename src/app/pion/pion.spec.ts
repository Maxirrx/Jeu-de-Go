import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pion } from './pion';

describe('Pion', () => {
  let component: Pion;
  let fixture: ComponentFixture<Pion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
