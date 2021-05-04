import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInputComponent } from './homepage-input.component';

describe('HomepageInputComponent', () => {
  let component: HomepageInputComponent;
  let fixture: ComponentFixture<HomepageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
