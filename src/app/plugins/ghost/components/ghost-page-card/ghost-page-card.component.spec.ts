import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostPageCardComponent } from './ghost-page-card.component';

describe('GhostPageCardComponent', () => {
  let component: GhostPageCardComponent;
  let fixture: ComponentFixture<GhostPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostPageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
