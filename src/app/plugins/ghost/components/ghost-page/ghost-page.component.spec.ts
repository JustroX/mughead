import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostPageComponent } from './ghost-page.component';

describe('GhostPageComponent', () => {
  let component: GhostPageComponent;
  let fixture: ComponentFixture<GhostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
