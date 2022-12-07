import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningObjectsService, LearningObjectDto, LearningObjectGroupDto } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-lo-group-detail',
  templateUrl: './lo-group-detail.component.html',
  styleUrls: ['./lo-group-detail.component.scss']
})
export class LoGroupDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private losService: LearningObjectsService) { }

  ngOnInit(): void {
    this.getLos();
  }

  getLos(): void {
    let id = '';
    id = String(this.route.snapshot.paramMap.get('id'));
    this.losService.loRepositoryControllerGetLoGroup(id)
      .subscribe(comp => this.loGroup = comp);
  }
  @Input() loGroup?: LearningObjectGroupDto;
}
