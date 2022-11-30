import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CompetenceDto } from 'competence_repository_api_typescript-angular';
@Component({
  selector: 'app-comp-dialog',
  templateUrl: './comp-dialog.component.html',
  styleUrls: ['./comp-dialog.component.scss']
})
export class CompDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<CompDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompetenceDto,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }}