import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetenciesService, CompetenceDto } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-learning-object-detail',
  templateUrl: './learning-object-detail.component.html',
  styleUrls: ['./learning-object-detail.component.scss']
})
export class LearningObjectDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private compService: CompetenciesService,
    private location: Location
  ) {}

  ngOnInit(): void  { this.getHero();
}

getHero(): void {
  let id = '';
  id = String(this.route.snapshot.paramMap.get('id'));
 this.compService.repositoryMgmtControllerGetCompetence(id)
   .subscribe(comp => this.competence = comp);
}
  @Input() competence?: CompetenceDto;
}
