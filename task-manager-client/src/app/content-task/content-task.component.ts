import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskWebApiService } from '../task-web-api.service';
import { Task } from '../task';

@Component({
  selector: 'app-content-task',
  templateUrl: './content-task.component.html',
  styleUrls: ['./content-task.component.css']
})
export class ContentTaskComponent implements OnInit {

  subscription: Subscription;
  contentTask: Task[];

  constructor( private taskWebApiService: TaskWebApiService) { }

  ngOnInit() {
    this.getAllTask();
  }

  getAllTask(): void {
    this.subscription = this.taskWebApiService.getAllTask().
    subscribe(result => {this.contentTask = result});
  }

  deleteTask(id: number, idTable: number): void {
    this.contentTask.splice(idTable, 1);
    this.taskWebApiService.deleteTask(id).subscribe();
  }

}
