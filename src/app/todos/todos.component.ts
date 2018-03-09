import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  nuevaTarea:string;
  constructor( private todosService:TodosService ) {
    this.todos=[];
    console.log('TodosComponent contructor')
   }

  ngOnInit() {
    console.log('TodosComponent ngOnInit')
    this.todosService.getTodos().subscribe(
      resultado=>{
        console.debug('peticion correcta %o,',resultado);
        this.mapear(resultado)
        
      },
      error =>{
        console.warn('peticion correcta %o,',error);
      }
    );
  }
  mapear(resultado:any){
    let todo:Todo;
    resultado.forEach(element => {
      todo=new Todo(element.title);
      todo.id= element.id;
      todo.idUser= element.idUser;
      todo.completed = element. completed;
      this.todos.push(todo);
    });
  }
  cambiarCompleto(todo:Todo){
    todo.completed=!todo.completed;
  }
  eliminar(id:number){
    let i=0;
    while(this.todos[i].id!=id && i<this.todos.length){
      i++;
    }
    if(this.todos[i].id==id){
      this.todos.splice(i,1);
    }
    
  }
  anadirNueva(){
    let todo=new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
  }
}
