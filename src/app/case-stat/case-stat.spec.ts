import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStat } from './case-stat';

describe('CaseStat', () => {
  let component: CaseStat;
  let fixture: ComponentFixture<CaseStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
