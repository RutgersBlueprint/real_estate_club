import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExcutiveTileComponent } from "./executive-tile.component";

describe("ExcutiveTileComponent", () => {
  let component: ExcutiveTileComponent;
  let fixture: ComponentFixture<ExcutiveTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExcutiveTileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcutiveTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
