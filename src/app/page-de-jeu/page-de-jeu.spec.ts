import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeJeu } from './page-de-jeu';

describe('PageDeJeu', () => {
  let component: PageDeJeu;
  let fixture: ComponentFixture<PageDeJeu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDeJeu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeJeu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
