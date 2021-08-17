import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostViewPageListComponent } from './ghost-view-page-list.component';

describe('GhostViewPageListComponent', () => {
  let component: GhostViewPageListComponent;
  let fixture: ComponentFixture<GhostViewPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostViewPageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostViewPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
