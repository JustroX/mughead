import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewAuthorComponent } from './ghost-view-author.component';

describe('GhostViewAuthorComponent', () => {
  let component: GhostViewAuthorComponent;
  let fixture: ComponentFixture<GhostViewAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
