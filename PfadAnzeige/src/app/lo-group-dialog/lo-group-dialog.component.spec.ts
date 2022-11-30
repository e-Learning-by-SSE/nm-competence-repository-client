import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoGroupDialogComponent } from './lo-group-dialog.component';

describe('LoGroupDialogComponent', () => {
  let component: LoGroupDialogComponent;
  let fixture: ComponentFixture<LoGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoGroupDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
