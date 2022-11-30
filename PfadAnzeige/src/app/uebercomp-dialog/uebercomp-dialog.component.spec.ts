import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebercompDialogComponent } from './uebercomp-dialog.component';

describe('UebercompDialogComponent', () => {
  let component: UebercompDialogComponent;
  let fixture: ComponentFixture<UebercompDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UebercompDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UebercompDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
