import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewTagListComponent } from './ghost-view-tag-list.component';

describe('GhostViewTagListComponent', () => {
  let component: GhostViewTagListComponent;
  let fixture: ComponentFixture<GhostViewTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewTagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
