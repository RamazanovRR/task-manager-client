import { TestBed } from '@angular/core/testing';

import { TaskWebApiService } from './task-web-api.service';

describe('TaskWebApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskWebApiService = TestBed.get(TaskWebApiService);
    expect(service).toBeTruthy();
  });
});
