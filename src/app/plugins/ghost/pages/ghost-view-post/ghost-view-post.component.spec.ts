import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewPost } from './ghost-view-post.component';

describe('GhostViewPost', () => {
  let component: GhostViewPost;
  let fixture: ComponentFixture<GhostViewPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GhostViewPost],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
