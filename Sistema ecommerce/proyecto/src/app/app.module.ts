import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { CarroComponent } from './carro/carro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PagoComponent } from './pago/pago.component';
import { WebpayComponent } from './webpay/webpay.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    LoginComponent,
    BaseComponent,
    FooterComponent,
    CarroComponent,
    NosotrosComponent,
    FormularioComponent,
    PagoComponent,
    WebpayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
