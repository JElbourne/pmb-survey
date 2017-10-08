import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SurveyService } from './survey/survey.service';
import { SurveyComponent } from './survey/survey.component';
import { QuestionsComponent } from './survey/questions/questions.component';
import { ResultComponent } from './survey/result/result.component';
import { ResultService } from './survey/result/result.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurveyComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [SurveyService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
