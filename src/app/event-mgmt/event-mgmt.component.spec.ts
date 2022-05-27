import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMgmtComponent } from './event-mgmt.component';

describe('EventMgmtComponent', () => {
  let component: EventMgmtComponent;
  let fixture: ComponentFixture<EventMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
