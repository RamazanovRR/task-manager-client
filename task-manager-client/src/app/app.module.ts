import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentTaskComponent } from './content-task/content-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContentTaskComponent,
    DetailTaskComponent,
    CreateNewTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
