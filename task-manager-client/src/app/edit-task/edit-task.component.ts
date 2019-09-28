import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TaskWebApiService } from '../task-web-api.service';
import { Task } from '../task';
import { async } from 'q';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  editTask: Task[];
  idTask: string;

  constructor(
    private route: ActivatedRoute,
    private taskWebApiService: TaskWebApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTaskById();
  }

  getTaskById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.idTask = id;
    this.taskWebApiService.getTaskById(id).subscribe(task => this.editTask = task);
  }

  addEditTask(): void {
    this.taskWebApiService.editTask(this.idTask, this.editTask).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
