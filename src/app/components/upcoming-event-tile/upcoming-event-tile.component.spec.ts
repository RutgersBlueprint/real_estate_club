import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventTileComponent } from './upcoming-event-tile.component';

describe('UpcomingEventTileComponent', () => {
  let component: UpcomingEventTileComponent;
  let fixture: ComponentFixture<UpcomingEventTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
