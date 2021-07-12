import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  project:any = {};

  constructor( private ActivatedRoute: ActivatedRoute,
               private _projectsService: ProjectsService ) {
    
    this.ActivatedRoute.params.subscribe( params =>{
      // console.log( params['id'] );

      this.project = this._projectsService.getProject(params['id']);
      console.log(this.project);

    });
   }

  ngOnInit(): void {
  }

}
