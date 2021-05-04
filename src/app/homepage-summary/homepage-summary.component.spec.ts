import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSummaryComponent } from './homepage-summary.component';

describe('HomepageSummaryComponent', () => {
  let component: HomepageSummaryComponent;
  let fixture: ComponentFixture<HomepageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
