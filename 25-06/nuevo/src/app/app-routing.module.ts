import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagosComponent } from './pagos/pagos.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [

{
  path:'',
  component: LoginComponent
},
{
  path:'productos',
  component: ProductosComponent
},
{
  path:'pagos',
  component: PagosComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
