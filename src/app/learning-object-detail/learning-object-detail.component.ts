import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetenciesService, CompetenceDto, LearningObjectsService, LearningObjectDto } from 'competence_repository_api_typescript-angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-learning-object-detail',
  templateUrl: './learning-object-detail.component.html',
  styleUrls: ['./learning-object-detail.component.scss']
})
export class LearningObjectDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private losService: LearningObjectsService  ) {}

  ngOnInit(): void  { this.getLos();
}

getLos(): void {
  let id = '';
  id = String(this.route.snapshot.paramMap.get('id'));
 this.losService.loRepositoryControllerLoadLearningObject(id)
   .subscribe(comp => this.lo = comp);
}
  @Input() lo?: LearningObjectDto;
}
