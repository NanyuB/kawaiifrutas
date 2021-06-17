import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaCompraComponent } from './Componentes/lista-compra/lista-compra.component';
import { CartaComponent } from './Componentes/carta/carta.component';
import { ObjetoComponent } from './Componentes/objeto/objeto.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListaCompraComponent, CartaComponent, ObjetoComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
