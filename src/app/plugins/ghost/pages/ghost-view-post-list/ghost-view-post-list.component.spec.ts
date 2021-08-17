import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewPostListComponent } from './ghost-view-post-list.component';

describe('GhostViewPostListComponent', () => {
  let component: GhostViewPostListComponent;
  let fixture: ComponentFixture<GhostViewPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
