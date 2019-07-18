import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenIconComponent } from './green-icon.component';

describe('GreenIconComponent', () => {
  let component: GreenIconComponent;
  let fixture: ComponentFixture<GreenIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
