import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarroComponent } from './carro/carro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';
import { WebpayComponent } from './webpay/webpay.component';

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
  {
    path:'about',
    component:NosotrosComponent
  },
  {
    path:'pago',
    component:PagoComponent
  },
  {
    path:'webpay',
    component:WebpayComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
