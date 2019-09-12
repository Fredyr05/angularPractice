import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

import { PracticeService } from '../services/practice.service';

@Component({
    selector: 'app-child',
    template: '<h1>This is a child component</h1><h1>This is from an http get request: {{word.title}}</h1>',
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor(private practiceService: PracticeService) { }

    word:any;

    ngOnChanges() {
        console.log("Child: Onchanges");
    }
    ngOnInit() {
        this.word = this.practiceService.getWord().subscribe(
            res => {this.word = res}
        );
        console.log("Child: OnInit");
    }
    ngDoCheck() {
        console.log("Child: DoCheck");
    }
    ngAfterContentInit() {
        console.log("Child: AfterContentInit");
    }
    ngAfterContentChecked() {
        console.log("Child: AfterContentChecked");
    }
    ngAfterViewInit() {
        console.log("Child: AfterViewInit");
    }
    ngAfterViewChecked() {
        console.log("Child: AfterViewChecked");
    }
    ngOnDestroy() {
        console.log("Child: OnDestroy");
    }

}
