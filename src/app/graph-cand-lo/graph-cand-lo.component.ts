import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Edge, Node } from '@swimlane/ngx-graph';
import { CompetenceDto, ResolvedUeberCompetenceDto, CompetenciesService, AuthenticationService, LearningObjectsService, LearningObjectDto, LearningObjectGroupDto } from 'competence_repository_api_typescript-angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-graph-cand-lo',
  templateUrl: './graph-cand-lo.component.html',
  styleUrls: ['./graph-cand-lo.component.scss']
})
export class GraphCandLOComponent implements OnInit {
  competencies: CompetenceDto[] = [];
  los: LearningObjectDto[] = [];
  losGroups: LearningObjectGroupDto[] = [];
  ueber_competencies: ResolvedUeberCompetenceDto[] = [];
  selected_ueber_Comp?: ResolvedUeberCompetenceDto;
  nodes: Node[] = [];
  edges: Edge[] = [];
  clusters: { id: string; label: string; childNodeIds: string[]; }[] = [];

  update$: Subject<any> = new Subject();

  constructor(private router: Router, private compService: CompetenciesService, private authService: AuthenticationService, private dialog: MatDialog, private loService: LearningObjectsService) { }

  ngOnInit(): void {
    this.compService.configuration.accessToken = this.authService.configuration.accessToken
    this.loService.configuration.accessToken = this.authService.configuration.accessToken
    this.getLOs();
    this.getCompetencies();
  }


  getLOs(): void {
    this.loService.loRepositoryControllerLoadRepository('1').subscribe({
      next: (v) => {
        console.log(v)
        this.los = v.learningObjects
        this.losGroups = v.learningObjectsGroups
        this.los.forEach(
          element => {
            this.nodes.push(
              {
                id: element.id,
                label: 'C',
                data: { name: element.name }
              }
            )
     /*       element.offeredCompetencies.forEach(
              offerdComp => this.edges.push({
                source: offerdComp,
                target: element.id,
                id:'ID'
              })
            )
            element.offeredUeberCompetencies.forEach(
              offerdUeberComp => this.edges.push({
                source: offerdUeberComp+'ueber',
                target: element.id,
                id:'ID'
              })
            )
            element.requiredCompetencies.forEach(
              reqComp => this.edges.push({
                source: element.id,
                target: reqComp,
                id:'ID'
              })
            )
            element.requiredUeberCompetencies.forEach(
              reqUeberComp => this.edges.push({
                source: reqUeberComp+'ueber',
                target: element.id,
                id:'ID'
              })
            )*/
          }
        )

        this.losGroups.forEach(
          element => {
            this.nodes.push(
              {
                id: element.id,
                label: 'D',
                data: { name: element.name }
              }
            )
          }
        )

        this.update$.next(true);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }
  getCompetencies(): void {
    this.compService.repositoryMgmtControllerLoadResolvedRepository('1').subscribe({
      next: (v) => {
        console.log(v)
        this.competencies = v.competencies
        this.ueber_competencies = v.ueberCompetencies
        this.competencies.forEach(element => {
          this.nodes.push({
            id: element.id,
            label: 'B',
            data: { name: element.skill }
          })
        });
        this.ueber_competencies.forEach(element => {
          this.nodes.push({
            id: element.id + 'ueber',
            label: 'A',
            data: { name: element.name }
          });
          element.nestedCompetencies.forEach(comp =>
            this.edges.push({
              id: 'CompToUeber',
              source: comp.id,
              target: element.id + 'ueber',

            }));
          element.nestedUeberCompetencies.forEach(comp =>
            this.edges.push({
              id: 'UeberToUeber',
              source: comp.id + 'ueber',
              target: element.id + 'ueber',

            }));

        });

        this.update$.next(true);
        console.log(this.nodes)
        console.log(this.edges)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }
}
