import { TestBed } from '@angular/core/testing';

import { NewTaskService } from './new-task.service';

describe('NewTaskService', () => {
  let service: NewTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
