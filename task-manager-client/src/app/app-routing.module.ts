import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTaskComponent } from './content-task/content-task.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/contentTask', pathMatch: 'full'},
  { path: 'contentTask', component: ContentTaskComponent},
  { path: 'createTask', component: CreateNewTaskComponent},
  { path: 'detail/:id', component: DetailTaskComponent},
  { path: 'edit/:id', component: EditTaskComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
