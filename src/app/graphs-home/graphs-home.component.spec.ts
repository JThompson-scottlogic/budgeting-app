import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsHomeComponent } from './graphs-home.component';

describe('GraphsHomeComponent', () => {
  let component: GraphsHomeComponent;
  let fixture: ComponentFixture<GraphsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
