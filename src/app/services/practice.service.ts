import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PracticeService {
    constructor(private http: HttpClient){}

    getWord(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    }
}