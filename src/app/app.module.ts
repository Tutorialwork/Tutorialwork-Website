import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import {HttpClientModule} from '@angular/common/http';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    SkillProgressComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    HomePageComponent,
    ImprintComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
