import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RndSubAppComponent } from './rnd-sub-app.component';

describe('RndSubAppComponent', () => {
  let component: RndSubAppComponent;
  let fixture: ComponentFixture<RndSubAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RndSubAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RndSubAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
