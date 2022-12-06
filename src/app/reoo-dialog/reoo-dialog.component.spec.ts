import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReooDialogComponent } from './reoo-dialog.component';

describe('ReooDialogComponent', () => {
  let component: ReooDialogComponent;
  let fixture: ComponentFixture<ReooDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReooDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReooDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
