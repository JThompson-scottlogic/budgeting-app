import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageNavigationComponent } from './homepage-navigation.component';

describe('HomepageNavigationComponent', () => {
  let component: HomepageNavigationComponent;
  let fixture: ComponentFixture<HomepageNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
