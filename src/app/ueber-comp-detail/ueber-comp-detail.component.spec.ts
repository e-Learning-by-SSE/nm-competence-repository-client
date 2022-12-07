import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberCompDetailComponent } from './ueber-comp-detail.component';

describe('UeberCompDetailComponent', () => {
  let component: UeberCompDetailComponent;
  let fixture: ComponentFixture<UeberCompDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UeberCompDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeberCompDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
