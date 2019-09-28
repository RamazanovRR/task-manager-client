import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TaskWebApiService } from '../task-web-api.service';
import { Task } from '../task';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {

  private newTask: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private taskWebApiService: TaskWebApiService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

  addTask() {
    this.taskWebApiService.addTask(this.newTask).subscribe();
    this.newTask.nameTask = "";
    this.newTask.text = "";
  }



}
