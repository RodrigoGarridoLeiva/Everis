import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import {BootstrapdirectivasComponent} from './bootstrapdirectivas/bootstrapdirectivas.component'

const routes: Routes = [

{
  path:'crud',
  component:CrudComponent
},
{
  path:'bootstrap',
  component: BootstrapdirectivasComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
