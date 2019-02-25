import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodeComponent } from './viewmode.component';

describe('ViewmodeComponent', () => {
  let component: ViewmodeComponent;
  let fixture: ComponentFixture<ViewmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
