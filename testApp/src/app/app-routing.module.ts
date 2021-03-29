import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitComponent } from './exit/exit.component';
import { QuizComponent } from './quiz/quiz.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path:"\welcome",component:WelcomeComponent},
  {path:"\exit",component:ExitComponent},
  {path:"\quiz",component:QuizComponent},
  {path:"",redirectTo:"\welcome",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
