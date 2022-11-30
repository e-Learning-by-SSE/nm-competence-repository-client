import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompetenceDto, ResolvedUeberCompetenceDto, CompetenciesService, AuthenticationService } from 'competence_repository_api_typescript-angular';
import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  competencies: CompetenceDto[] = [];
  selectedComp?: CompetenceDto;
  ueber_competencies: ResolvedUeberCompetenceDto[] = [];
  selected_ueber_Comp?: ResolvedUeberCompetenceDto;
  nodes: Node[] = [];
  edges: Edge[] = [];
  clusters: { id: string; label: string; childNodeIds: string[]; }[] = [];

  update$: Subject<any> = new Subject();

  constructor(private router: Router, private compService: CompetenciesService, private authService: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.compService.configuration.accessToken = this.authService.configuration.accessToken
    this.getCompetencies();
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
            data: {name:element.skill}
          })
        });
        this.ueber_competencies.forEach(element => {
          this.nodes.push({
            id: element.id+'ueber',
            label: 'A',
            data:{name:element.name}
          });
          element.nestedCompetencies.forEach(comp =>
            this.edges.push({
              id: 'CompToUeber',
              source: comp.id,
              target: element.id+'ueber',

            }));
          element.nestedUeberCompetencies.forEach(comp =>
            this.edges.push({
              id: 'UeberToUeber',
              source: comp.id+'ueber',
              target: element.id+'ueber',

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
