import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-tarjeta',
  templateUrl: './project-tarjeta.component.html'
})
export class ProjectTarjetaComponent implements OnInit {

  @Input() project: any = {};
  @Input() index: number;

  @Output() projectSeleccionado: EventEmitter<number>;

  constructor( private router:Router) { 
    this.projectSeleccionado =  new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  verProject(){
    // console.log(this.index);
    this.router.navigate(['/project',this.index]);
    // this.projectSeleccionado.emit(this.index);

  }
}
