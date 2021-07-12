import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from "../services/projects.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = [];

  constructor( private _ProjectsService:ProjectsService,
               private router:Router) {



   }

  ngOnInit(): void {
    this.projects = this._ProjectsService.getProjects();
    console.log(this.projects);
  }

  verProject( idx:number){
    // Despliega id del arreglo de projecto
    // console.log(idx);
    this.router.navigate(['/project',idx]);
  }


}
