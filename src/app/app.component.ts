import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'icoder2021';
  res = 0 ;
actonbarn1=0;
actonbarn2=10;
actonbarn3=200;
fivebahtlist=[4,10,8,20,50];
onebahtlist:number[]=[];
summary=0;
sum(){
  this.summary= this.fivebahtlist.reduce((sumCost,num)=>{
     return sumCost + num*5

   },0)
 }
tran(){
this.onebahtlist=this.fivebahtlist.map(num=>{

return num*5

})

}

sumres(){

this.res=this.actonbarn1+this.actonbarn2+this.actonbarn3;

}

}
