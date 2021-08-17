import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewAuthorListComponent } from './ghost-view-author-list.component';

describe('GhostViewAuthorListComponent', () => {
  let component: GhostViewAuthorListComponent;
  let fixture: ComponentFixture<GhostViewAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewAuthorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
