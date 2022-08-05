import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerPleaseComponent } from './add-player-please.component';

describe('AddPlayerPleaseComponent', () => {
  let component: AddPlayerPleaseComponent;
  let fixture: ComponentFixture<AddPlayerPleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayerPleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlayerPleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
