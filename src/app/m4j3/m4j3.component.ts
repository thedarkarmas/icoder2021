import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m4j3',
  templateUrl: './m4j3.component.html',
  styleUrls: ['./m4j3.component.css']
})
export class M4j3Component implements OnInit {
  res = 0 ;
  cal(value:string){
    const price = Number(value);
   this.res= price *3/4
    }
  constructor() { }

  ngOnInit(): void {
  }

}
