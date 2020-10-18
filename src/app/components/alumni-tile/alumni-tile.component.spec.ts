import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniTileComponent } from './alumni-tile.component';

describe('AlumniTileComponent', () => {
  let component: AlumniTileComponent;
  let fixture: ComponentFixture<AlumniTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
