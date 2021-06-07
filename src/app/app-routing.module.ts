import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstuddentComponent } from './addstuddent/addstuddent.component';
import { HomeComponent } from './home/home.component';
import { StuddentComponent } from './studdent/studdent.component';

const routes: Routes = [
  {path:'student',component:StuddentComponent},
  {path:'addstudent',component:AddstuddentComponent}
  ,{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
