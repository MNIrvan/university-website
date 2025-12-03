
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { ResearchComponent } from './components/research/research.component';
import { CampusLifeComponent } from './components/campus-life/campus-life.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { StudentPortalComponent } from './components/student-portal/student-portal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'programs/:id', component: ProgramsComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'campus-life', component: CampusLifeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portal', component: StudentPortalComponent },
  { path: '**', redirectTo: '' }
];


export class AppRoutingModule {}
