import { Component, OnInit } from '@angular/core';
import { Todos } from './../../models/todos.model'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // let todocompleted = document.querySelector("content");

  todo : Todos[] = [];

  todoInput :string = "";

  Todos = [
    {
      content : 'learn angular',
      completed : false
    },
    {
      content : 'learn Html',
      completed : true
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  deleteTodo(id : number) {
    this.Todos = this.Todos.filter((v, i) => i !== id)
  }

  addtodo(){
    this.Todos.push({
      content : this.todoInput,
      completed : false
    });
    this.todoInput = "";
  }




}
