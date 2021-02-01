import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAnimateComponent } from './some-animate.component';

describe('SomeAnimateComponent', () => {
  let component: SomeAnimateComponent;
  let fixture: ComponentFixture<SomeAnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeAnimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
