import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid';
import { Task, TaskStatus } from './task.module';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const _task: Task = {
      id: uuidv1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(_task);
    console.log('_task', _task);
    return _task;
  }
}
