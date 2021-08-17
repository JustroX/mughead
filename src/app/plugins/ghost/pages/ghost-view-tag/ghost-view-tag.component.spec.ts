import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewTagComponent } from './ghost-view-tag.component';

describe('GhostViewTagComponent', () => {
  let component: GhostViewTagComponent;
  let fixture: ComponentFixture<GhostViewTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
