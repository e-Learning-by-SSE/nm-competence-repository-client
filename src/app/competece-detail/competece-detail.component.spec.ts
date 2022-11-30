import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeteceDetailComponent } from './competece-detail.component';

describe('CompeteceDetailComponent', () => {
  let component: CompeteceDetailComponent;
  let fixture: ComponentFixture<CompeteceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompeteceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompeteceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
