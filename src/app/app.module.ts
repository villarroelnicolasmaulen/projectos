import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

//Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { ProjectsService } from "./components/services/projects.service";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { CosasComponent } from './components/cosas/cosas.component';
import { ProjectComponent } from './components/project/project.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProjectTarjetaComponent } from './components/project-tarjeta/project-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    CosasComponent,
    ProjectComponent,
    BuscadorComponent,
    ProjectTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    CommonModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
