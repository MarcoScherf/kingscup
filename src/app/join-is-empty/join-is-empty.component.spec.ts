import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinIsEmptyComponent } from './join-is-empty.component';

describe('JoinIsEmptyComponent', () => {
  let component: JoinIsEmptyComponent;
  let fixture: ComponentFixture<JoinIsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinIsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinIsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
