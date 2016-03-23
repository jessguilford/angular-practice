import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component ({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template:`
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Task Description" #newDescription>
      <button (click)="addTask(newDescription)" class="add-button">Add</button>
    </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement){
    this.onSubmitNewTask.emit(userDescription.value);
    userDescription.value = "";
  }
}
