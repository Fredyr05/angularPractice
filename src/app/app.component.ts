import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  title:string = 'This is the Parent';

  parentChat = 'Hello Child';

  ngOnChanges(){
    console.log("Parent: Onchanges");
  }
  ngOnInit(){
    console.log("Parent: OnInit");
  }
  ngDoCheck(){
    console.log("Parent: DoCheck");
  }
  ngAfterContentInit(){
    console.log("Parent: AfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("Parent: AfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("Parent: AfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("Parent: AfterViewChecked");
  }
  ngOnDestroy(){
    console.log("Parent: OnDestroy");
  }
  
  change(){
    this.title = this.title + ".";
  }
}
