import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadloginComponent } from './headlogin.component';

describe('HeadloginComponent', () => {
  let component: HeadloginComponent;
  let fixture: ComponentFixture<HeadloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
