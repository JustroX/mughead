import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewPageComponent } from './ghost-view-page.component';

describe('GhostViewPageComponent', () => {
  let component: GhostViewPageComponent;
  let fixture: ComponentFixture<GhostViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
