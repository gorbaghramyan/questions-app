import { ThanksComponent } from './components/thanks/thanks.component';
import { QuestionComponent } from './components/questions/questions.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'questions', pathMatch: 'full', component: QuestionComponent },
  { path: 'thanks', pathMatch: 'full', component: ThanksComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }