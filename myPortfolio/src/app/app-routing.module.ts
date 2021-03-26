import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: "\login", component:LoginFormComponent},
  {path:"\signup",component:SignUpComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"},
  {path:"\portfolio",component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
