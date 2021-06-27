import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarroComponent } from './carro/carro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },
  {
    path:'carro',
    component:CarroComponent
  },

  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'productos',
    component:ProductosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
