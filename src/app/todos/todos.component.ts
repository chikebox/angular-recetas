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
        this.mapear(resultado);
        
      },
      error =>{
        console.warn('peticion correcta %o,',error);
      }
    );
  }
  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapear(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapear( result : any ){

    let todo:Todo;
    result.forEach(el => {
        todo = new Todo( el.title );
        todo.id = el.id;
        todo.idUser = el.userId;
        todo.completed = el.completed;

        this.todos.push(todo);
    });

  }
  cambiarCompleto(todo:Todo){
    console.log('TodosComponent cambiarCompleted ');
    
    this.todosService.cambiarCompleted(todo).subscribe(
      result=>{
        console.log('TodosComponent cambiarCompleted %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo cambiarCompleted');
        console.error(error);
      }
    );
  }
  delete(todo:Todo){
    console.log('TodosComponent delete %o', todo );

    this.todosService.delete(todo.id).subscribe(
      result=>{
        this.cargarTareas();
      },
      error=>{
        alert('No de pudo elimiar Tarea');
      }
    );
    /*
    this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos.splice(index,1);
        return false; //break        
      }
    });*/

  }
  
  new(){
    console.log('TodosComponent new ');
    let todo = new Todo(this.nuevaTarea);
    this.todosService.post(todo).subscribe(
      result=>{
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }
  
    
}
