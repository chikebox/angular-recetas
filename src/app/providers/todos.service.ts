import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';
import { Global } from '../global';


@Injectable()
export class TodosService {

  constructor( public http: HttpClient ) {
    console.log('TodosService constructor');
   }
   getTodos():Observable<any>{
     let url=Global.endpoint+"/todos"
     console.log('TodosService getTodos ${url}');
     return this.http.get(url);
   }
   delete(id):Observable<any>{
    let url = Global.endpoint+"/todos/"+id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

  post(todo:Todo):Observable<any>{
    let url = Global.endpoint+"/todos";
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "userId": todo.idUser,
                  "title": todo.title,
                  "completed": todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }
  cambiarCompleted(todo:Todo):Observable<any>{
    let url = Global.endpoint+"/todos/"+todo.id;
    console.log(`TodosService put ${url}`);

    let body = {
                  "completed": !todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.patch( url, body , httpOptions );
  }

}
