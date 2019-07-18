import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedIconComponent } from './red-icon.component';

describe('RedIconComponent', () => {
  let component: RedIconComponent;
  let fixture: ComponentFixture<RedIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
