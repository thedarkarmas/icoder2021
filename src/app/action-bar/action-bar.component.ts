import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
   cost=0;
   @Input() step = 1 ;
   @Input() notbelow=0;
   @Input() notmore:null|number=0;
   @Output() numberchange =new EventEmitter();
   @Input() number=0;

  // _componentname='action-bar'
  // get componentname(){

  //   return this._componentname;

  // }
  // set componentname(value:string){

  //   this._componentname=value;

  // }
   constructor() { }
   ngOnInit(): void {
     this.cost=this.number;
    // console.log(this.componentname)
    // this.componentname
    }



   inc(){

    if(this.notmore===null){
      this.cost=this.cost+this.step;
    }
    else if((this.cost+this.step)<=this.notmore){
      this.cost=this.cost+this.step;


    }
    this.numberchange.emit(this.cost)
   }
   dec(){
     if(this.cost-this.step>=this.notbelow){
    this.cost=this.cost-this.step;
    this.numberchange.emit(this.cost)
  }



   }



}
