import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostNavbarComponent } from './ghost-navbar.component';

describe('GhostNavbarComponent', () => {
  let component: GhostNavbarComponent;
  let fixture: ComponentFixture<GhostNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
