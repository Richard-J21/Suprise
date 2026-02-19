import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalMessage } from './final-message';

describe('FinalMessage', () => {
  let component: FinalMessage;
  let fixture: ComponentFixture<FinalMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
