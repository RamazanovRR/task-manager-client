import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TaskWebApiService } from '../task-web-api.service';
import { Task } from '../task';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {

  taskById: Task[];

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
    this.taskWebApiService.getTaskById(id).subscribe(task => this.taskById = task);
  }

  goBack(): void{
    this.location.back();
  }

}
