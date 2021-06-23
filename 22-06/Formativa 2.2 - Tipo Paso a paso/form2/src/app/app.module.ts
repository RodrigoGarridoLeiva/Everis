import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { ElementosComponent } from './elementos/elementos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ElementosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
