import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  projects:any[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _projectService: ProjectsService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.projects = this._projectService.buscarProject(params['termino'])
      console.log(this.projects);
    })
  }

  verProject( idx:number){
    // Despliega id del arreglo de projecto
    // console.log(idx);
    this.router.navigate(['/project',idx]);
  }

}
