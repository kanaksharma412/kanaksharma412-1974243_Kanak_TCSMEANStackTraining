import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CountdownModule} from 'ngx-countdown';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExitComponent } from './exit/exit.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WelcomeComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, NgbModule, CountdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
