import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCandLOComponent } from './graph-cand-lo.component';

describe('GraphCandLOComponent', () => {
  let component: GraphCandLOComponent;
  let fixture: ComponentFixture<GraphCandLOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCandLOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphCandLOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
