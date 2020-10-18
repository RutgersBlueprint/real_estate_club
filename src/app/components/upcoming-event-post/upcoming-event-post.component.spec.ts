import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventPostComponent } from './upcoming-event-post.component';

describe('UpcomingEventPostComponent', () => {
  let component: UpcomingEventPostComponent;
  let fixture: ComponentFixture<UpcomingEventPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
