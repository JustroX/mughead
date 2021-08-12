import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostPagePostComponent } from './ghost-page-post.component';

describe('GhostPagePostComponent', () => {
  let component: GhostPagePostComponent;
  let fixture: ComponentFixture<GhostPagePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GhostPagePostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostPagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
