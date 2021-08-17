import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostAuthorComponent } from './ghost-author.component';

describe('GhostAuthorComponent', () => {
  let component: GhostAuthorComponent;
  let fixture: ComponentFixture<GhostAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
