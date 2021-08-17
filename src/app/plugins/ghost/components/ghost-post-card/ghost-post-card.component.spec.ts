import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostPostCardComponent } from './ghost-post-card.component';

describe('GhostPostCardComponent', () => {
  let component: GhostPostCardComponent;
  let fixture: ComponentFixture<GhostPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
