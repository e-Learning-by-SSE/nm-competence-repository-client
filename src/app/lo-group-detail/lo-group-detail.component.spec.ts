import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoGroupDetailComponent } from './lo-group-detail.component';

describe('LoGroupDetailComponent', () => {
  let component: LoGroupDetailComponent;
  let fixture: ComponentFixture<LoGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoGroupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
