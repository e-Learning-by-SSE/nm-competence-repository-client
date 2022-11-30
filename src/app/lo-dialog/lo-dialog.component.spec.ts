import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoDialogComponent } from './lo-dialog.component';

describe('LoDialogComponent', () => {
  let component: LoDialogComponent;
  let fixture: ComponentFixture<LoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
