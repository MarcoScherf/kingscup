import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNotExistComponent } from './game-not-exist.component';

describe('GameNotExistComponent', () => {
  let component: GameNotExistComponent;
  let fixture: ComponentFixture<GameNotExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameNotExistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameNotExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
